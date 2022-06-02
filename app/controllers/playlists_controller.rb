class PlaylistsController < ApplicationController
    before_action :authorized
    
    def show
        playlist = Playlist.find(params[:id])
        render json: playlist
    end
    
    def index
        playlists = Playlist.all
        render json: playlists
    end
    
    def create
        playlist = Playlist.create(playlist_params session[:user_id])
        render json: playlist, status: :created
    end
    
    private

    def playlist_params
        params.permit(:title, :user_id)
    end

end
