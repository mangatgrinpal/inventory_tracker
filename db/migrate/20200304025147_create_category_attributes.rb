class CreateCategoryAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :category_attributes do |t|
      t.integer :category_id
      t.integer :trackable_attribute_id

      t.timestamps
    end
    add_index :category_attributes, :category_id
    add_index :category_attributes, :trackable_attribute_id
  end
end
