class ItemsController < ApplicationController
	before_action :authenticate_user!

	def index
		
		render json: serialized_items
	end

	def create

		@item = Item.create(item_params)

		@category = current_user.categories.where(title: params['category']['title']).first
		
		
		if !@category
			@category = current_user.categories.create(category_params)
			@trackable_attributes = params['trackable_attributes']
			@trackable_attributes.each do |attribute|
				byebug
				if attribute['id'] == nil
					@trackable_attribute = TrackableAttribute.create(trackable_attribute_params)
				else

				end
			end
		else

		end
		ItemCategory.create!(item: @item, category: @category)

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
			params.permit(:name)
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end
end
