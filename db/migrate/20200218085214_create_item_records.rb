class CreateItemRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :item_records do |t|
      t.integer :item_id
      t.integer :record_id

      t.timestamps
    end
    add_index :item_records, :item_id
    add_index :item_records, :record_id
  end
end
