Rails.application.routes.draw do
  get "users/sessions"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :todos, except: [:new, :edit] do
      resources :steps, only: [:index, :create]
    end
    resources :steps, only: [:update, :destroy]
  end
end
