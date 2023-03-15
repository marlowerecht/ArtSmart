class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :date
  has_one :user
  has_one :painting
end
