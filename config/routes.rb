Rails.application.routes.draw do
  devise_for :users, controllers: { 
  	sessions: 'users/sessions', registrations: 'users/registrations' 
  }
  resources :restaurants
  resources :items
  resources :records
  
  root 'static_pages#home'







  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb

  match '*path', to: 'static_pages#home', via: :all, constraints: lambda { |req| req.path.exclude? 'rails/active_storage' }
end
