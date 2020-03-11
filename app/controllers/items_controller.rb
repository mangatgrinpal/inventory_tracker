class ItemsController < ApplicationController
	before_action :authenticate_user!

	def index
		
		render json: serialized_items
	end

	def create

		Item.transaction do
			@item = Item.create(item_params)
			@category = current_user.categories.find_or_create_by(title: params[:category][:title])

			params[:trackable_attributes].try(:each) do |trackable_attribute|
				@category.trackable_attributes.find_or_create_by(name: trackable_attribute[:name])
			end

			@item_category = ItemCategory.create!(item: @item, category: @category)
		end

		if @item.save
			render json: {items: serialized_items, categories: current_user_categories, trackable_attributes: TrackableAttribute.all}
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
			params.require(:trackable_attribute).permit(:name)
		end

		def current_user_categories
			@categories = Category.where(user_id: current_user.id)
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end
end
