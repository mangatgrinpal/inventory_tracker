class StaticPagesController < ApplicationController
  def home
  	@current_day = Time.current.strftime('%A, %B %d')
  	#@current_week_range = (Time.zone.now.to_date.yesterday..Time.zone.now.to_date.tomorrow).to_a

  end
end
