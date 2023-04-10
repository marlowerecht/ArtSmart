class Artist < ApplicationRecord
    has_many :paintings

    validates :name, presence: true
    validates :name, uniqueness: true
    validates :name, presence: true
    validates :nationality, presence: true
    validates :born, presence: true
    validates :died, presence: true
end
