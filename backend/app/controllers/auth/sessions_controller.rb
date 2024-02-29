class Auth::SessionsController < ApplicationController
  def index
    if current_user
      render json: current_user
    else
      render json: {error: 'No user is logged in'}
    end
  end

  def create

  end

  def destroy
    if current_user
      sign_out current_user
      render json: {message: 'User logged out'}
    else
      render json: {error: 'No user is logged in'}
    end
  end
end
