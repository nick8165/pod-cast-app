class PlaylistPodCast < ApplicationRecord
    belongs_to :playlist 
    belongs_to :pod_cast 
end
