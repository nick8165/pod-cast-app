class PodCast < ApplicationRecord
    has_many :users, through: :user_pod_casts
    belongs_to :creator 
    has_many :genres, through: :pod_cast_genre
end
