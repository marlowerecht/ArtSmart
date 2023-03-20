Rails.application.routes.draw do
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :paintings, only: [:index, :update]
  resources :artists, only: [:show]
  resources :users, only: [:show, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
end
