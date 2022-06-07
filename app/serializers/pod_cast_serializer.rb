class PodCastSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumb_nail, :episodes 
end
