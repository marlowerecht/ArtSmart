class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :authorize

    def current_user
      user = User.find_by(id: session[:user_id])
      user
    end

    private

    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 

    def render_not_found error
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end 

    def authorize
      # render json: { error: "Not authorized, please login" }, status: :unauthorized unless @current_user
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def admin_user
      admin = User.find_by(name: "admin")
      return render json: { error: "only admins have access" }, status: unauthorized unless session[:user_id] == admin.id
    end
end
