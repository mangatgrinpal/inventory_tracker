class ItemsController < ApplicationController
	def index
		
		render json: serialized_items
	end

	def create
		@item = Item.new(item_params)

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
			params.require(:item).permit(:name, :units, :restaurant_id, :category)
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end
end
