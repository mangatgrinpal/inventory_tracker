class StaticPagesController < ApplicationController
  def home
  	@current_day = [Time.current.to_date]
  	@current_week_range = (Time.zone.now.to_date.yesterday..Time.zone.now.to_date.tomorrow).to_a

  end
end
