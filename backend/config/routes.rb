Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'auth/registrations',
      }
      resources :novels, only: %i[index]
      resources :notes
    end
  end
end
