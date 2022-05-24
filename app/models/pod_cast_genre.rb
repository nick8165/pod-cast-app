class PodCastGenre < ApplicationRecord
    belongs_to :pod_cast
    belongs_to :genre 
end
