class AddRecordTypeToRecords < ActiveRecord::Migration[6.0]
  def change
  	add_column :records, :record_type, :string
  end
end
