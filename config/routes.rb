Rails.application.routes.draw do
  root 'homes#index'

  get '/home', to: 'homes#index'
  get '/projects', to: 'homes#index'
  get '/blog', to: 'homes#index'
  get '/about', to: 'homes#index'
  get '/contact', to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
