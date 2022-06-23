class PlaylistPodCastsController < ApplicationController
    before_action :authorized

    def show
        playlist_pod = PlaylistPodCast.where(playlist_id: params[:playlist_id])
        render json: playlist_pod, include: :pod_cast
    end

    def create
        playlist_pod_cast = PlaylistPodCast.create(playlist_pod_cast_params)
        render json: playlist_pod_cast, status: :created
    end

    def destroy
        playlist_pod = PlaylistPodCast.where(playlist_id: params[:playlist_id], pod_cast_id: params[:pod_cast_id])
        if playlist_pod
            playlist_pod.destroy_all
            head :no_content
        else
            render json: {error: "pod cast not found"}, status: :not_found
        end
    end

    private

    def playlist_pod_cast_params
        params.permit(:playlist_id, :pod_cast_id)
    end

end