class Painting < ApplicationRecord
  belongs_to :artist
  has_many :comments
  has_many :favorites
  # has_many :users, through: :comments
  has_many :users, through: :favorites

  validates :name, presence: true
end
