class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :pod_casts, :playlists
end
