class RemoveColumnsFromRecords < ActiveRecord::Migration[6.0]
  def change

    remove_column :records, :item_id, :integer

    remove_column :records, :date, :string

    remove_column :records, :record_type, :string
  end
end
