class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :painting_id, :user_id
end
