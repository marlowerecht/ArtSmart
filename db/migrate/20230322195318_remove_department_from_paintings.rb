class RemoveDepartmentFromPaintings < ActiveRecord::Migration[7.0]
  def change
    remove_column :paintings, :department, :string
  end
end
