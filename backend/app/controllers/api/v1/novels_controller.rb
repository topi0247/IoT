class Api::V1::NovelsController < ApplicationController
  before_action :authenticate_user!
  def index
    notes = Note.includes(:user).where(user_id: current_user.id)
    p current_user
    if notes.exists?
      notes = notes.map { |note|
        {
          id: note.id,
          title: note.title,
          created_at: note.created_at.strftime("%Y/%m/%d %H:%M:%S"),
          updated_at: note.updated_at.strftime("%Y/%m/%d %H:%M:%S"),
          total_characters: 0,
        }
      }
      puts notes

      render json: notes, status: :ok
    else
      render json: { message: "No notes found" }, status: :ok
    end
  end
end
