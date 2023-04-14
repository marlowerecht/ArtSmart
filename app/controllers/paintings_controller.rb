
class PaintingsController < ApplicationController

    before_action :admin_user, only: [:create, :update, :destroy]

    #gets all of the paintings
    def index
        paintings = Painting.all.shuffle 
        render json: paintings, include: ['artist', 'comments', 'comments.user'], status: :ok
    end

    def create
        new_painting = Painting.create!(painting_params)
        render json: new_painting, status: :created
    end

    def update
        painting = find_painting
        painting.update!(painting_params)
        render json: painting, include: ['artist', 'comments', 'comments.user'], status: :accepted
    end

    def destroy
        painting = find_painting
        painting.destroy
        head :no_content
    end

    private

    def find_painting
        Painting.find(params[:id])
    end

    def painting_params
        params.permit(
            :name,
            :image,
            :period,
            :date,
            :medium,
            :dimensions,
            :location,
            :artist_id
        )
    end
end
