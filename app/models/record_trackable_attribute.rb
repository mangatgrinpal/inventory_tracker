class RecordTrackableAttribute < ApplicationRecord
	belongs_to :record
	belongs_to :trackable_attribute
end
