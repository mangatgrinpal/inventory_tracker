class RecordsController < ApplicationController
	
	def index
		# @record = Record.where(item_id: params[:itemId], week_dates: params[:weekDates])
		# render json: @record
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
			
		end
end
