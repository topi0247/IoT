class NoteHistory < ApplicationRecord
  belongs_to :note

  validates :content, presence: true
end
