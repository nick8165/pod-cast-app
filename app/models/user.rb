class User < ApplicationRecord
    has_many :user_pod_casts
    has_many :pod_casts, through: :user_pod_casts
    has_many :playlists
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
