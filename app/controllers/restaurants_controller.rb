class RestaurantsController < ApplicationController
  def index

    render json: serialized_restaurants
  end  

  def create
  	@restaurant = Restaurant.new(restaurant_params)
  	if @restaurant.save
  		render json: serialized_restaurants
  	end
  end

  def destroy
  	@restaurant = Restaurant.find(params[:id])
  	if @restaurant.destroy
      render json: serialized_restaurants
    end
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
