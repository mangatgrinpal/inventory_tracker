class AddAttributesToRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :records, :type, :string
    add_column :records, :date, :string
  end
end
