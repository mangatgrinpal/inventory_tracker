class Item < ApplicationRecord
	belongs_to :restaurant
	has_many :records

	validates :name, presence: true
	validates :units, presence: true
end
