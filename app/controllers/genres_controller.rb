class GenresController < ApplicationController
    before_action :authorize 
    
    def show
        genre = Genre.find(params[:id])
        render json: genre
    end
    
    def index
        genres = Genre.all
        render json: genres
    end

end
