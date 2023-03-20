class PaintingsController < ApplicationController

    #gets all of the paintings
    def index
        paintings = Painting.all 
        render json: paintings, include: ['artist', 'comments', 'comments.user'], status: :ok
    end

    #updates the painting depending on how the user feels about it
    def update
        painting = Painting.find(params[:id])
        painting.update!(painting_params)
        render json: painting, include: ['artist', 'comments', 'comments.user'], status: :accepted
    end

    private

    # only want the user to be able to update those attributes
    def painting_params
        params.permit(
            # :name,
            # :image,
            # :department,
            # :period,
            # :culture,
            # :date,
            # :medium,
            # :dimensions,
            # :tags,
            :user_favorite,
            :user_seen,
            :user_bucketlist,
            # :artist_id
        )
    end
end
