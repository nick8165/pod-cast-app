class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_secure_password

    has_many :user_pod_casts
    has_many :pod_casts, through: :user_pod_casts
    has_many :playlists

end
