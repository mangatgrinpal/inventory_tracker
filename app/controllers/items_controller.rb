class ItemsController < ApplicationController
	before_action :authenticate_user!

	def index
		
		render json: serialized_items
	end

	def create

		Item.transaction do
			@item = Item.create!(item_params)
			@category = current_user.categories.find_or_create_by!(title: params[:category][:title])
			@category.trackable_attributes.each do |trackable_attribute|
				@initial_record = @item.records.create!
				@record_attribute = RecordTrackableAttribute.create!(record: @initial_record, trackable_attribute: trackable_attribute)
			end

			params[:trackableAttributes].try(:each) do |trackable_attribute|

				@trackable_attribute = TrackableAttribute.where(name: trackable_attribute[:name]).first
				if @trackable_attribute
					CategoryAttribute.create!(category: @category, trackable_attribute: @trackable_attribute)
				else
					@category.trackable_attributes.create!(name: trackable_attribute[:name])
				end

			end

			@item_category = ItemCategory.create!(item: @item, category: @category)
		end

		if @item.save
			render json: {items: serialized_items, categories: serialized_categories, trackable_attributes: TrackableAttribute.all}
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

		def serialized_categories
			@categories = Category.where(user_id: current_user.id)
			ActiveModel::Serializer::CollectionSerializer.new(@categories, each_serializer: CategorySerializer)
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end
end
