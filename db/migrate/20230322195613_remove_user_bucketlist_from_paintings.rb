class RemoveUserBucketlistFromPaintings < ActiveRecord::Migration[7.0]
  def change
    remove_column :paintings, :user_bucketlist, :boolean
  end
end
