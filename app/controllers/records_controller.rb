class RecordsController < ApplicationController
	
	def index

		render json: serialized_records
	end

	def create
		#first locate the record to see if it exists

		@record = Record.find_by(item_id: params[:record][:item_id], date: params[:record][:date], record_type: params[:record][:record_type])

		#if it exists and it is an increment 
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

			@record = Record.new(record_params)
			if @record.save && params[:update_type] == 'increment'
				@record.increment!(:quantity, 0.5)
				render json: serialized_items, status: 200
			else
				render json: serialized_items, status: 400
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

		def record_params
			params.require(:record).permit(:item_id, :quantity, :record_type, :date)
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
