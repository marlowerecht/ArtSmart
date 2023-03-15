class CreatePaintings < ActiveRecord::Migration[7.0]
  def change
    create_table :paintings do |t|
      t.string :name
      t.string :image
      t.string :department
      t.string :period
      t.string :culture
      t.string :date
      t.string :medium
      t.string :dimensions
      t.string :tags
      t.boolean :user_favorite, default: false, null: false
      t.boolean :user_seen, default: false, null: false
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
