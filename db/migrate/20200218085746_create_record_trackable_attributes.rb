class CreateRecordTrackableAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :record_trackable_attributes do |t|
      t.integer :record_id
      t.integer :trackable_attribute_id

      t.timestamps
    end
    add_index :record_trackable_attributes, :record_id
    add_index :record_trackable_attributes, :trackable_attribute_id
  end
end
