class Note < ApplicationRecord
  has_many :note_histories, dependent: :destroy
end
