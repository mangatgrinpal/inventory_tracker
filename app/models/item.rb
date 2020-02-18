class Item < ApplicationRecord
	belongs_to :restaurant
	has_many :item_records
	has_many :records, through: :item_records
	has_one :item_category
	has_one :category, through: :item_category
	has_many :trackable_attributes, through: :category

	validates :name, presence: true
	validates :units, presence: true
end
