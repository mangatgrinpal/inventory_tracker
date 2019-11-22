class RecordsController < ApplicationController
	
	def index

		render json: serialized_records
	end

	def create
		@record = Record.new(record_params)

		if @record.save
			render json: @record
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
			params.require(:record).permit(:week_dates, :item_id, :quantity)
		end 

		def serialized_records
			current_time = Time.current
			@records = Record.where(updated_at: (curent_time - 24.hours)..current_time)
			ActiveModel::Serializer::CollectionSerializer.new(@records, each_serializer: RecordsSerializer)
		end

		
end
