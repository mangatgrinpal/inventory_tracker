class AttributeCreator
	attr_accessor :category
	attr_accessor :trackable_attributes

	def initialize(category, trackable_attributes)
		@category = category
		@trackable_attributes = trackable_attributes
	end


	def create_category_attributes
		byebug
		ActiveRecord::Base.transaction do
			@trackable_attributes.each do |attribute|
				@category.trackable_attributes.create!(attribute)
			end
		end
	end

end