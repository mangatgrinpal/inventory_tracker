class Record < ApplicationRecord
	has_one :item_record
	has_one :item, through: :item_record

	has_one :record_trackable_attribute
	has_one :trackable_attribute, through: :record_trackable_attribute

	scope :todays_records, lambda { 
		where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day) 
	}

	validates :quantity, presence: true, numericality: true

end
