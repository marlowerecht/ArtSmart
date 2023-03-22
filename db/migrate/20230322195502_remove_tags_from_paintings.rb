class RemoveTagsFromPaintings < ActiveRecord::Migration[7.0]
  def change
    remove_column :paintings, :tags, :string
  end
end
