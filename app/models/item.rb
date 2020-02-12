class Item < ApplicationRecord
	belongs_to :restaurant
	has_many :records
	has_one :item_category
	has_one :category, through: :item_category

	validates :name, presence: true
	validates :units, presence: true
end
