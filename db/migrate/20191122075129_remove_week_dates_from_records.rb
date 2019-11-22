class RemoveWeekDatesFromRecords < ActiveRecord::Migration[6.0]
  def change
  	remove_column :records, :week_dates

  	#also setting default value of 0 for quantity
  	change_column_default :records, :quantity, 0
  end
end
