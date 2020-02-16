class CategoriesController < ApplicationController

	def index
		byebug
		@categories = Category.where(user_id: params[:user_id])
		render json: @categories
	end
end
