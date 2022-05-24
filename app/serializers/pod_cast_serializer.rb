class PodCastSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumb_nail, :length, :creator_id
end
