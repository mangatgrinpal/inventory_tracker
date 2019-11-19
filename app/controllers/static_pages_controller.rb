class StaticPagesController < ApplicationController
  def home
  	@current_week_range = (Time.zone.now.to_date.beginning_of_week..Time.zone.now.to_date.end_of_week).to_a

  end
end
