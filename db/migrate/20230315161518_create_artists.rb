class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :nationality
      t.string :born
      t.string :died

      t.timestamps
    end
  end
end
