class CreatorsController < ApplicationController
    before_action :authorize 
    
    def show
        creator = Creator.find(params[:id])
        render json: creator
    end
    
    def index
        creators = Creator.all
        render json: creators
    end

end
