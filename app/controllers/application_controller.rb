class ApplicationController < ActionController::Base
	include DeviseTokenAuth::Concerns::SetUserByToken

	wrap_parameters false

end
