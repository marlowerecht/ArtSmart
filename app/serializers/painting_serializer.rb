class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :period, :date, :medium, :dimensions, :artist_id
  has_one :artist, serializer: PaintingArtistSerializer
  has_many :comments, serializer: PaintingCommentSerializer
end
