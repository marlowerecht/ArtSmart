class PaintingArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :nationality, :born, :died
end
