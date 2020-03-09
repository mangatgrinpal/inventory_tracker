class CategoryAttribute < ApplicationRecord
	belongs_to :category
	belongs_to :trackable_attribute
end
