class ChangeQuantityColumnTypeOfRecords < ActiveRecord::Migration[6.0]
  def change
  	change_column :records, :quantity, :float
  end
end
