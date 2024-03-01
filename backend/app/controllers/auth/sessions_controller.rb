class Auth::SessionsController < ApplicationController
  def index
    if current_user
      render json: current_user
    else
      render json: {error: 'No user is logged in'}
    end
  end
end
