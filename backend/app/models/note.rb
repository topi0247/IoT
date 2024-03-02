class Note < ApplicationRecord
  belongs_to :user
  has_many :note_histories, dependent: :destroy
end
