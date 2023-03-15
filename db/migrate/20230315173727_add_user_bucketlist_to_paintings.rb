class AddUserBucketlistToPaintings < ActiveRecord::Migration[7.0]
  def change
    add_column :paintings, :user_bucketlist, :boolean, default: false, null: false
  end
end
