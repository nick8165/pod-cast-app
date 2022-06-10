class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :pod_casts
end
