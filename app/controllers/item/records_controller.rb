class Item::RecordsController < ApplicationController
	
	def index

		render json: serialized_records
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
			@item_record = ItemRecord.create!(item: @item, record: @record)


		end
	end

	def update

		@record = Item.find_by(id: params[:item_id]).records.where(created_at: today)

		#if it does then update it with the new value -- front end validations check to see if 
		#if has changed since the input last lost focus
		if @record && params[:update_type] == 'increment' #is increment
			@record.increment!(:quantity, 0.5)
			render json: serialized_items, status: 200
		#if it exists and we are sending an decrement
		elsif @record && params[:update_type] == 'decrement'

			#perform a check to see if the current quantity is greater than 0. it will not decrement if the value is 0
			if @record.quantity > 0
				@record.decrement!(:quantity, 0.5)
				render json: serialized_items, status: 200

			else

				#do this when it fails.. think of something

			end
			
		else
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

		def record_params
			params.require(:record).permit(:quantity)
		end 

		def serialized_records
			current_time = Time.current
			@records = Record.where(updated_at: (current_time - 24.hours)..current_time)
			ActiveModel::Serializer::CollectionSerializer.new(@records, each_serializer: RecordsSerializer)
		end

		def serialized_items
			@items = Item.where(restaurant_id: params[:restaurant])
			ActiveModel::Serializer::CollectionSerializer.new(@items, each_serializer: ItemSerializer)
		end

		
end
