class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      user_id = t.references :user, null: false, foreign_key: true
      uuid = t.uuid :uuid, not_null: true, unique: true
      title = t.string :title
      t.timestamps
    end
  end
end
