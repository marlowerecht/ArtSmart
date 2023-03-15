class CommentsController < ApplicationController
    #returns all comments
    def index
        comments = Comment.all 
        render json: comments, status: :ok
    end

    #creates new comment
    def create 
        new_comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    #updates one comment
    def update 
        comment = find_comment
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end

    #deletes one comment
    def destroy 
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private

    #method to find a single somment
    def find_comment
        Comment.find(params[:id])
    end

    #attributes
    def comment_params 
        params.permit(
            :content,
            :date,
            :user_id,
            :painting_id
        )
    end
end
