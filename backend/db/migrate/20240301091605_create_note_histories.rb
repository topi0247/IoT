class CreateNoteHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :note_histories do |t|
      note_id = t.references :note, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
