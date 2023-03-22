class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :painting_id, :user_id
  has_one :painting
  has_one :user
end
