class ItemsController < ApplicationController
	before_action :authenticate_user!

	def index
		
		render json: serialized_items
	end

	def create

		ActiveRecord::Base.transaction do
			@item = Item.create!(item_params)

			@category = Category.where(title: params['category']['title']).first
			if !@category
				@category = Category.create!(category_params)	
			end
			
			@item.save
			ItemCategory.create!(item: @item, category: @category)
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

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end
end
