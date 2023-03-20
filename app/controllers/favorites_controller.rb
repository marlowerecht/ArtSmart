class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def show
        favorite = find_favorite
        render json: favorite, status: :ok
    end

    def create
        new_favorite = Favorite.create!(favorite_params)
        render json: :new_favorite, status: :created
    end

    def destroy
        favorite = find_favorite
        favorite.destroy
        head :no_content
    end

    private

    def find_favorite
        favorite = Favorite.find(params[:id])
    end

    def favorite_params
        params.permit(:painting_id, :user_id)
    end
end
