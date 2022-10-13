class Playlist < ApplicationRecord
    validates :title, presence: true
    
    belongs_to :user 
    has_many :playlist_pod_casts, dependent: :destroy
    has_many :pod_casts, through: :playlist_pod_casts
   
end
