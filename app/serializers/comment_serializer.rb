class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :date, :user_id
  has_one :user
  has_one :painting
end
