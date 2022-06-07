class EpisodesController < ApplicationController
    before_action :authorized 
    
    def show
        episode = Episode.find(params[:id])
        render json: episode
    end
    
    def index
        episodes = Episode.all
        render json: episodes, include: :pod_cast
    end

    def episodes
        episodes = Episode.find_by(params[:pod_cast_id])
        render json: episodes
    end

end
