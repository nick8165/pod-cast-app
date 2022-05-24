class PlaylistsController < ApplicationController
    before_action :authorize 
    
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
    
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def playlist_params
        params.permit(:title, :user_id)
    end

end
