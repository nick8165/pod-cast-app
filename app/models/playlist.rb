class Playlist < ApplicationRecord
    belongs_to :user 
    has_many :pod_casts, through: :playlist_pod_cast
end
