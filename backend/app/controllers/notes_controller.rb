class NotesController < ApplicationController
  def index
    @notes = Note.includes(:users).find_by(user_id: current_user.id)
    render json: @notes, status: :ok
  end

  def show
    note = Note.includes(:users).find_by(user_id: current_user.id, id: params[:id])
    if note.nil?
      render json: { error: 'Note not found' }, status: :not_found
      return
    end

    note_history = NoteHistory.find_by(note_id: note.id).order(created_at: :desc).first
    if note_history.nil?
      render json: { error: 'Note history not found' }, status: :not_found
      return
    end

    render json: { note: note, note_history: note_history }, status: :ok
  end

  def create
  end

  def update

  end

  def destroy

  end
end
