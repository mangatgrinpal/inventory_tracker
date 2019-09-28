class Item < ApplicationRecord
	belongs_to :restaurant

	validates :name, presence: true
	validates :units, presence: true
end
