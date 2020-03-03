class RemoveCategoryIdFromTrackableAttributes < ActiveRecord::Migration[6.0]
  def change

    remove_column :trackable_attributes, :category_id, :integer
  end
end
