class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :period, :date, :medium, :dimensions, :artist_id, :user_seen
  has_one :artist, serializer: PaintingArtistSerializer
  has_many :comments, serializer: PaintingCommentSerializer
end
