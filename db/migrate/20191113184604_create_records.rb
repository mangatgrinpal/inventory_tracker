class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string :week_dates
      t.integer :quantity
      t.integer :item_id

      t.timestamps
    end
    add_index :records, :item_id
  end
end
