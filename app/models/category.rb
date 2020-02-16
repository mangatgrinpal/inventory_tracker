class Category < ApplicationRecord
	belongs_to :user
	has_many :item_categories
	has_many :items, through: :item_categories

	validates :title, presence: true


end
