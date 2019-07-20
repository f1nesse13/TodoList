class Api::StepsController < ApplicationController
  def index
    steps = Todo.find(params[:todo_id]).steps
    render json: steps
  end

  def create
    step = Step.new(step_params)

    if step.save
      render json: step
    else
      render json: step.errors.full_messages, status: 442
    end
  end

  def update
    step = Step.find(params[:id])

    if step.update(step_params)
      render json: step
    else
      render json: step.errors.full_messages, status: 442
    end
  end

  def destroy
    step = Step.find(params[:id])

    if step.destroy
      render json: step
    else
      render json: { message: "Not found", status: 404 }
    end
  end

  private

  def step_params
    params.require(:steps).permit(:title, :body, :done, :todo_id)
  end
end
