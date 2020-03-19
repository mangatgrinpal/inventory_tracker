class CategoryAttribute < ApplicationRecord
	belongs_to :category
	belongs_to :trackable_attribute

	# this orders by creation of the join model rather than the creation of the trackable_attributes
	default_scope { order(id: :asc)}
end
