class CategoryCreator
	attr_reader :category
	attr_reader :trackable_attributes

	def initialize(category, trackable_attributes)
		@category = category
		@trackable_attributes = trackable_attributes
	end

	def create_category
		ActiveRecord::Base.transaction do
			@trackable_attributes.each do |attribute|
				@category.trackable_attributes.create!(attribute)
			end
		end
	end

end