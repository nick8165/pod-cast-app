class Playlist < ApplicationRecord
    belongs_to :user 
    has_many :playlist_pod_casts
    has_many :pod_casts, through: :playlist_pod_casts
end
