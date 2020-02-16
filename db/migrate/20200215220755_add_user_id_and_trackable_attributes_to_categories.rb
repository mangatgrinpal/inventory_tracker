class AddUserIdAndTrackableAttributesToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :user_id, :integer
    add_column :categories, :trackable_attributes, :string, default: [], array: true
  end
end
