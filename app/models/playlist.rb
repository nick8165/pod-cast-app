class Playlist < ApplicationRecord
    belongs_to :user 
    has_many :playlist_pod_casts, dependent: :destroy
    has_many :pod_casts, through: :playlist_pod_casts
    validates :title, presence: true
end
