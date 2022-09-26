Rails.application.routes.draw do
  
  resources :episodes, only: [:show, :index]
  resources :playlist_pod_casts, only: [:show, :create, :destroy]
  resources :pod_cast_genres
  resources :user_pod_casts, only: [:show, :create, :destroy]
  resources :creators, only: [:show, :index]
  resources :playlists, only: [:create, :index, :show, :update, :destroy]
  resources :genres, only: [:show, :index]
  resources :pod_casts, only: [:show, :index]
  resources :users, only: [:show, :create]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  get "/user_pod_id_show/:user_id", to: "user_pod_casts#user_pod_id_show"
  delete "/user_pod_cast/:user_id/:pod_cast_id", to: "user_pod_casts#destroy"
  get "/userPlaylists/:user_id", to: "playlists#user_playlists"
  get "/playlist_pod_casts_show/:playlist_id", to: "playlist_pod_casts#show"
  delete "/playlist_pod_casts_delete/:playlist_id/:pod_cast_id", to: "playlist_pod_casts#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
