Rails.application.routes.draw do
  root to: 'pages#home'
  namespace :api, defaults: { format: :json } do
    resources :thoughts, only: [ :show ]
  end
end
