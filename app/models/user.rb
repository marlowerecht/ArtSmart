class User < ApplicationRecord
    has_secure_password
    
    has_many :comments, dependent: :destroy
    has_many :favorites, dependent: :destroy
    # has_many :paintings, through: :comments
    has_many :paintings, through: :favorites

    # tests if passowrd has at least one number, one lowercase letter, one uppercase letter, and is at least 8 characters long
    # PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

    validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, :if => :password #makes sure the validation doesn't trigger on an update that doesn't involve password
    validates :password, format: { with: PASSWORD_REGEX }
    validates :password, length: { maximum: 30 }
end
