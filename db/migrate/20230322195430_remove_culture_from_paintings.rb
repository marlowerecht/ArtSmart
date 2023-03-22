class RemoveCultureFromPaintings < ActiveRecord::Migration[7.0]
  def change
    remove_column :paintings, :culture, :string
  end
end
