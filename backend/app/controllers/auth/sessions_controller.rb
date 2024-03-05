class Auth::SessionsController < DeviseTokenAuth::SessionsController
  def index
    puts "current_user: #{current_user}"
    if current_user
      render json: current_user, status: :ok
    else
      render json: {message: "Not Login"}, status: :unauthorized
    end
  end
end
