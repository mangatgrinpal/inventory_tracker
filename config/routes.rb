Rails.application.routes.draw do
  root 'static_pages#home'







  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb

  match '*path', to: 'static_pages#home', via: :all
end
