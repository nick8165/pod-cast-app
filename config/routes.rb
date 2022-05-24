Rails.application.routes.draw do
  
  resources :playlist_pod_casts
  resources :pod_cast_genres
  resources :user_pod_casts
  resources :creators
  resources :playlists, only: [:create, :index, :show, :update, :destroy]
  resources :genres
  resources :pod_casts
  resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
