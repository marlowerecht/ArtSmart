class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :painting

  validates :content, presence: true
end
