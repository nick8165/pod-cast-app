class User < ApplicationRecord
    has_many :pod_cast, through: :user_pod_cast
end
