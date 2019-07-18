class StepsController < ApplicationController
  def index
    @steps = Step.all
    render json: @steps
  end

  def show
    @step = Step.find(params[:id])
    render json: @step
  end

  def create
    @step = Step.new(step_params)

    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 442
    end
  end

  def update
    @step = Step.find(params[:id])

    if @step.update(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: 442
    end
  end

  def destroy
    @step = Step.find(params[:id])

    if @step.destroy
      render json: @step
    else
      render json: { errors: "Cannot delete step" }
    end
  end
end
