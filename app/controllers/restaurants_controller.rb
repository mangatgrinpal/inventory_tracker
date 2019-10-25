class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: serialized_restaurants
  end  

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


  def serialized_restaurants
    @restaurants = Restaurant.all
    RestaurantSerializer.new(@restaurants, include: [:items]).serialized_json
  end
end
