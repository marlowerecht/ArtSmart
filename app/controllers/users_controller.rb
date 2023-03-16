class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    
    def show
        user = find_user
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user

        if params[:password].blank?
            params.delete(:password)
            user_params.delete(:password)
            user.update!(user_params)
            render json: user, status: :accepted
        end
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :username, :email, :password)
    end
end

# user_params = params.require(:user).permit(:name, :username, :email, :password)
      
# # Remove the password and password confirmation keys for empty values
# user_params.delete(:password) unless user_params[:password].present?

# user_params