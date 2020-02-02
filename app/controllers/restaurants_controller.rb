class RestaurantsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :create, :destroy]

  def index
    render json: serialized_restaurants
  end  

  def create
    byebug
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
    params.require(:restaurant).permit(:name, :image)
  end


  def serialized_restaurants
    @restaurants = Restaurant.where(user_id: current_user.id)
    ActiveModel::Serializer::CollectionSerializer.new(@restaurants.with_attached_image, each_serializer: RestaurantSerializer)
  end
end
