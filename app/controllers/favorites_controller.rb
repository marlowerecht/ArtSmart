class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite, status: :ok
    end
end
