class ItemsController < ApplicationController
	def index
		@items = Item.where(restaurant_id: params[:restaurant])
		render json: @items
	end

	def create
		@item = Item.new(item_params)
		if @item.save
			render json: @item
		end
	end

	def destroy
		@item = Item.find(params[:id])
		@item.destroy
	end

	private

		def item_params
			params.require(:item).permit(:name, :units)
		end
end
