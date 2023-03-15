class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :paintings, through: :comments

    # tests if passowrd has at least one number, one lowercase letter, one uppercase letter, and is at least 8 characters long
    # PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

    validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true
    # validates :password, format: { with: PASSWORD_REGEX }
    validates :password, length: { maximum: 30 }
end
