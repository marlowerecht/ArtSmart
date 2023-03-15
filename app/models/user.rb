class User < ApplicationRecord
    has_many :comments
    has_many :paintings, through: :comments
end
