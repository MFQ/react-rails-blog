class PostsController < ApplicationController
	def index
		@posts = Post.all 
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			render :json => { status: true, post: @post }
		else
			render :json => { status: false }
		end
	end

	def show
	end

	private 

	def post_params
		params.require(:posts).permit(:title, :body)
	end

end
