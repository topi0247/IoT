class Auth::RegistrationsController < ApplicationController

  def create
    user = User.new(sign_up_params)

    begin
      user.save!
      render json: user.as_json(only: %i[access_token Client uid name id]), status: 201
    rescue ActiveRecord::RecordInvalid => e
      # 校長のありがたい助言
      logger.debug(e.record.errors)
      render json: {error: e.record.errors.full_messages}, status: 400
    end
  end

  def sign_up_params
    params.permit(:email, :password, :password_confirmation, :name)
  end
end
