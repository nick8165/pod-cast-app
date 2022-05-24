class Genre < ApplicationRecord
    has_many :pod_casts, through: :pod_cast_genre
end
