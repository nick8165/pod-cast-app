class PlaylistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :playlist_not_found
    before_action :authorized
    
    def show
        playlist = Playlist.find(params[:id])
        render json: playlist
    end

    def user_playlists
        playlist = Playlist.where(user_id: params[:user_id])
        render json: playlist
    end
    
    def index
        playlists = Playlist.all
        render json: playlists
    end
    
    def create
        playlist = Playlist.create(playlist_params)
        render json: playlist, status: :created
    end

    def update
        playlist = Playlist.find_by(id: params[:id])
        playlist.update(playlist_params)
        render json: playlist, status: :accepted
    end

    def destroy
        playlist = Playlist.find(params[:id])
        playlist.destroy
        head :no_content
    end
    
    private

    def playlist_params
        params.permit(:title, :user_id)
    end

    def playlist_not_found
        render json: {error: "Playlist not found "}, status: :not_found
    end

end
