class CategoriesController < ApplicationController
	before_action :authenticate_user! 

	def index
		render json: current_user_categories
	end

	def destroy
		@category = Category.find(params[:id])
		if @category.destroy
			render json: current_user_categories
		end
	end

	private
		def category_params
			params.require(:category).permit(:title)
		end

		def current_user_categories
			@categories = Category.where(user_id: current_user.id)
		end
end
