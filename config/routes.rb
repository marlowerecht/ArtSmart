Rails.application.routes.draw do
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :paintings, only: [:index, :create, :update, :destroy]
  resources :artists, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
  delete '/deleteaccount', to: 'users#destroy'
  get '/users/:id/favorites', to: 'favorites#index'
end
