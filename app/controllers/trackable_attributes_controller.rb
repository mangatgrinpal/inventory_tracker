class TrackableAttributesController < ApplicationController
	before_action :authenticate_user!

	def index
		@trackable_attributes = TrackableAttribute.all
		render json: @trackable_attributes
	end

end
