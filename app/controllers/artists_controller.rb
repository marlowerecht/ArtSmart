class ArtistsController < ApplicationController
    def show
        artist = Artist.find(params[:id])
        render json: artist, status: :ok
    end
end
