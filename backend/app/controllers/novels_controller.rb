class NovelsController < ApplicationController
  def index
    # @notes = Note.includes(:users).find_by(user_id: current_user.id)
    # render json @notes, status: :ok
    puts "Hello, world!"
    render json: { message: "Hello, world!" }, status: :ok
  end
end
