class Api::TodosController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    @todos = Todo.find_by(user_id: current_user.id)
    render json: @todos, include: :tags
  end

  def create
    @todo = current_user.todos.new(todo_params)
    @todo.user_id = current_user.id
    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 442
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 442
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])

    if @todo.destroy
      render json: @todo, include: :tags
    else
      render json: { error: "cannot delete" }
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done, :user_id, tag_names: [])
  end
end
