class ItemsController < ApplicationController
	before_action :authenticate_user!

	def index
		
		render json: serialized_items
	end

	def create

		Item.transaction do
			@item = Item.create(item_params)

			@category = current_user.categories.where(title: params['category']['title']).first
			
			#check if the category exists in the db
			if !@category
				#if it does not we will create the category
				# and assign the trackable attributes to this category
				@category = current_user.categories.create!(category_params)
				@trackable_attributes = TrackableAttribute.create!(trackable_attribute_params)

				# @trackable_attributes.each do |trackable_attribute|


				# 	if trackable_attribute['id'] == nil
				# 		byebug
				# 		@trackable_attribute = TrackableAttribute.create!(trackable_attribute)
				# 	else
				# 		@trackable_attribute = TrackableAttribute.where(id: trackable_attribute.id).first

				# 	end
				# 	@category_attribute = CategoryAttribute.create!(category: @category, trackable_attribute: @trackable_attribute)
				# end

			end

			@item_category = ItemCategory.create!(item: @item, category: @category)
		end

		if @item.save
			render json: serialized_items
		end
	end

	def destroy
		@item = Item.find(params[:id])
		if @item.destroy
			render json: serialized_items
		end
	end

	private

		def item_params
			params.require(:item).permit(:name, :units, :restaurant_id)
		end

		def category_params
			params.require(:category).permit(:title)
		end

		def trackable_attribute_params
			params.require(:trackable_attributes).permit([:name])
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end
end
