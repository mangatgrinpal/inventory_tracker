class TrackableAttribute < ApplicationRecord
	belongs_to :category
	has_many :record_trackable_attributes
	has_many :records, through: :record_trackable_attributes

end
