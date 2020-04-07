class Item < ApplicationRecord
	belongs_to :restaurant
	has_one :item_category, dependent: :destroy
	has_one :category, through: :item_category
	has_many :trackable_attributes, through: :category
	has_many :item_records
	has_many :records, through: :item_records

	validates :name, presence: true, length: { in: 1..64 }
	validates :units, presence: true, length: { in: 1..64 }
end
