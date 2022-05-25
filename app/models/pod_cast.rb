class PodCast < ApplicationRecord
    has_many :user_pod_casts
    has_many :users, through: :user_pod_casts
    belongs_to :creator
    has_many :pod_cast_genres 
    has_many :genres, through: :pod_cast_genres
end
