class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :department, :period, :culture, :date, :medium, :dimensions, :tags, :user_favorite, :user_seen
  has_one :artist
end
