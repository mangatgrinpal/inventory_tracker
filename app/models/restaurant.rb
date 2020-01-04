class Restaurant < ApplicationRecord
	has_many :items
	has_one_attached :image

	validates :name, presence: true
end
