class AddLocationToPaintings < ActiveRecord::Migration[7.0]
  def change
    add_column :paintings, :location, :string
  end
end
