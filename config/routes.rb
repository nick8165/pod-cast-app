Rails.application.routes.draw do
  
  resources :episodes, only: [:show, :index]
  resources :playlist_pod_casts
  resources :pod_cast_genres
  resources :user_pod_casts
  resources :creators, only: [:show, :index]
  resources :playlists, only: [:create, :index, :show, :update, :destroy]
  resources :genres, only: [:show, :index]
  resources :pod_casts, only: [:show, :index]
  resources :users, only: [:show, :create]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  get "/podcast", to: "pod_casts#index"
  post "/userPod", to: "user_pod_casts#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
