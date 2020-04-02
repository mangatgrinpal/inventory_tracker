class Item::RecordsController < ApplicationController
	
	def index
		@item = Item.find_by(id: params[:item_id])
		@item_attributes  = @item.trackable_attributes
		if @item.records.where(created_at: today).length != @item_attributes.length
			@item_attributes.each do |trackable_attribute|
				@records = @item.records.joins(:trackable_attribute).where('record_trackable_attributes.trackable_attribute_id = ?', trackable_attribute.id)
				if @records.where(created_at: today).length == 0
					quantity = @records.last.try(:quantity)
					@record = @item.records.create!(quantity: quantity)
					@record_attribute = RecordTrackableAttribute.create!(record: @record, trackable_attribute: trackable_attribute)
				end
			end
			
		end
		
		render json: @item.records.where(created_at: today), status: 200
	end


	def create
		#first locate the record to see if a record exists from TODAY
		
		@item = Item.find_by(id: params[:item_id])
		@trackable_attribute = TrackableAttribute.find_by(id: params[:trackable_attribute])
		@record = @item.records.where(created_at: today).select { |record| record.trackable_attribute == @trackable_attribute }.first


		#if it does then update it with the new value -- front end validations check to see if 
		#if has changed since the input last lost focus
		if @record
			@record.update(quantity: params[:record][:quantity])	
		else

			@record = @item.records.create!(quantity: params[:record][:quantity])

			@record_attribute = RecordTrackableAttribute.create!(record: @record, trackable_attribute: @trackable_attribute)

		end
		
	

		if @record.save

			render json: @item.records.where(created_at: today), status: 200
		end

	end

	def update

		@item = Item.find_by(id: params[:item_id])
		@record = Record.find_by(id: params[:id])

		#if it does then update it with the new value -- front end validations check to see if 
		#if has changed since the input last lost focus
		if params[:update_type] == 'increment' #is increment
			@record.increment!(:quantity, 0.5)
			render json: @item.records.where(created_at: today), status: 200

		#if it exists and we are sending an decrement
		else 
			#perform a check to see if the current quantity is greater than 0. it will not decrement if the value is 0
			if @record.quantity > 0.5
				@record.decrement!(:quantity, 0.5)
				render json: @item.records.where(created_at: today), status: 200

			else

				# think of an error message to send when this tries to decrement below 0
				# render json: @record, status: 400

			end
			

		end


	end

	def destroy
		@record = Record.find(params[:id])
		if @record.destroy
			#do something
		end
	end

	private

		def today
			Time.zone.now.beginning_of_day..Time.zone.now.end_of_day	
		end

		def yesterday
			(Time.zone.now.beginning_of_day-1.day)..(Time.zone.now.end_of_day-1.day)
		end

		def record_params
			params.require(:record).permit(:quantity)
		end 

		def serialized_records
			@records = Record.where(updated_at: today)
			ActiveModel::Serializer::CollectionSerializer.new(@records, each_serializer: RecordsSerializer)
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end

		
end
