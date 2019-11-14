class StaticPagesController < ApplicationController
  def home
  	@current_week_start = (Time.zone.now.beginning_of_week).strftime('%m/%d/%Y')
  	@current_week_end = (Time.zone.now.end_of_week).strftime('%m/%d/%Y')

  end
end
