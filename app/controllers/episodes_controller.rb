class EpisodesController < ApplicationController
    before_action :authorized 
    
    def show
        episode = Episode.find(params[:id])
        render json: episode
    end
    
    def index
        episodes = Episode.all
        render json: episodes
    end

end
