class PodCastsController < ApplicationController
    before_action :authorize 
    
    def show
        pod_cast = PodCast.find(params[:id])
        render json: pod_cast
    end
    
    def index
        pod_casts = PodCast.all
        render json: pod_casts
    end

end
