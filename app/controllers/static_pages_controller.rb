class StaticPagesController < ApplicationController
  def home
  	@current_day = Time.current.strftime('%A, %B %d')
  	@yesterday = (Time.current - 1.day).strftime('%A, %B %d')

  end
end
