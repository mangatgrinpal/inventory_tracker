class TrackableAttributesController < ApplicationController
	before_action :authenticate_user!

	def index
		@trackable_attributes = current_user.trackable_attributes
		render json: @trackable_attributes
	end

end
