class PlaylistsController < ApplicationController
    before_action :authorized
    
    def show
        playlist = Playlist.find(params[:id])
        render json: playlist
    end

    def user_playlists
        playlist = Playlist.where(user_id: params[:user_id])
        if playlist
            render json: playlist
        else
            render json: {error: "playlist not found"}, status: :not_found
        end
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
        if playlist
            playlist.update(playlist_params)
            render json: playlist, status: :accepted
        else
            render json: {error: "playlist not found"}, status: :not_found
        end
    end

    def destroy
        playlist = Playlist.find(params[:id])
        if playlist
            playlist.destroy
            head :no_content
        else
            render json: {error: "playlist not found"}, status: :not_found
        end
    end
    
    private

    def playlist_params
        params.permit(:title, :user_id)
    end

end
