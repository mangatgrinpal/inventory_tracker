class CategoriesController < ApplicationController
	before_action :authenticate_user! 

	def index
		@categories = Category.where(user_id: current_user.id)
		render json: @categories
	end


	private
		def category_params
			params.require(:category).permit(:title)
		end
end
