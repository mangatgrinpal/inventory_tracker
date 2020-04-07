class TrackableAttribute < ApplicationRecord
	belongs_to :user

	has_many :record_trackable_attributes
	has_many :records, through: :record_trackable_attributes

	has_many :category_attributes
	has_many :categories, through: :category_attributes

	validates :name, presence: true, length: { in: 1..64 }

end
