Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :todos, except: [:new, :edit], defaults: { format: :json }
  end

  namespace :api do
    resources :steps, except: [:new, :edit], defaults: { format: :json }
  end

  root to: "static_pages#root"
end
