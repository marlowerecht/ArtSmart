class RemoveUserSeenFromPaintings < ActiveRecord::Migration[7.0]
  def change
    remove_column :paintings, :user_seen, :boolean
  end
end
