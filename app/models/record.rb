class Record < ApplicationRecord
	has_one :item_record
	has_one :item, through: :item_record

	has_one :record_trackable_attribute
	has_one :trackable_attribute, through: :record_trackable_attribute



end
