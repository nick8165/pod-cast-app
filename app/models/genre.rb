class Genre < ApplicationRecord
    has_many :pod_cast_genres
    has_many :pod_casts, through: :pod_cast_genres
end
