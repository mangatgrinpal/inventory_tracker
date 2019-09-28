class RestaurantsController < ApplicationController
  def create
  	@restaurant = Restaurant.new(restaurant_params)
  	if @restaurant.save
  		render json: @restaurant
  	end
  end

  def destroy
  	@restaurant = Restaurant.find(params[:id])
  	@restaurant.destroy
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name)
  end
end
