class ChangeTypeColumnForRecords < ActiveRecord::Migration[6.0]
  def change
  	remove_column :records, :type 
  end
end
