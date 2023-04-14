
class ArtistsController < ApplicationController

    before_action :admin_user, only: [:create]

    def index
        artists = Artist.all
        render json: artists, status: :ok
    end

    def show
        artist = Artist.find(params[:id])
        render json: artist, status: :ok
    end

    def create
        new_artist = Artist.create!(artist_params)
        render json: new_artist, status: :created
    end

    private
    
    def artist_params
        params.permit(
            :name,
            :nationality,
            :born,
            :died
        )
    end
end
