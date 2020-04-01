class AddUserIdToTrackableAttributes < ActiveRecord::Migration[6.0]
  def change
    add_column :trackable_attributes, :user_id, :integer
    add_index :trackable_attributes, :user_id
  end
end
