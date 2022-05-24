class UserPodCast < ApplicationRecord
    belongs_to :user 
    belongs_to :pod_cast 
end
