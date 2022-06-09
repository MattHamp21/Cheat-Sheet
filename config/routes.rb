Rails.application.routes.draw do

  namespace :api do
    resources :users
    
    get '/users', to: 'users#index'
    post '/users', to: 'users#create'
    get '/users/:id', to: 'users#show'
    put '/users/:id', to: 'users#update'
  end


end
