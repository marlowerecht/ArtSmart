class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :department, :period, :culture, :date, :medium, :dimensions, :tags, :artist_id, :user_favorite, :user_seen
  has_one :artist, serializer: PaintingArtistSerializer
  has_many :comments, serializer: PaintingCommentSerializer
end
