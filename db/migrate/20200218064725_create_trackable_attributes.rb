class CreateTrackableAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :trackable_attributes do |t|
      t.string :name
      t.integer :category_id

      t.timestamps
    end
    add_index :trackable_attributes, :name
    add_index :trackable_attributes, :category_id
  end
end
