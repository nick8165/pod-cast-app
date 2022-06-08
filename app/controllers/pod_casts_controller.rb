class PodCastsController < ApplicationController
    before_action :authorized 
    
    def show
        pod_cast = PodCast.find(params[:id])
        render json: pod_cast, include: [:episodes, :genres, :creator]
    end
    
    def index
        pod_casts = PodCast.all
        render json: pod_casts
    end

    def episodes_index 
        pod_cast = PodCast.find(params[:pod_cast_id])
        episodes = pod_cast.episodes
        render json: episodes, include: :pod_cast
    end

    def episode
        episode = Episode.find(params[:id])
        render json: episode, include: :pod_cast
    end

end
