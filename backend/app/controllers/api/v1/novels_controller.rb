class Api::V1::NovelsController < ApplicationController
  before_action :authenticate_user!
  def index
    # TODO : 自由に順番を入れ替えられるようにしたい
    notes = Note.includes(:user, :note_histories)
                .where(user_id: current_user.id)
                .select("notes.user_id, notes.id, notes.title, notes.created_at")
                .order("note_histories.created_at DESC")

    notes = notes.map { |note|
      latest_note_history = note.note_histories.order(created_at: :desc).first
      if latest_note_history
        {
          id: note.id,
          title: note.title,
          created_at: note.created_at.strftime("%Y/%m/%d %H:%M:%S"),
          updated_at: note.note_histories.first.created_at.strftime("%Y/%m/%d %H:%M:%S"),
          total_characters: note.note_histories.first.content.length
        }
      else
        nil
      end
    }.compact

    # 空だったときの表示処理はフロントでやる
    render json: notes, status: :ok
  end
end
