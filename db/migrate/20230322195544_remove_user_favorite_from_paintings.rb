class RemoveUserFavoriteFromPaintings < ActiveRecord::Migration[7.0]
  def change
    remove_column :paintings, :user_favorite, :boolean
  end
end
