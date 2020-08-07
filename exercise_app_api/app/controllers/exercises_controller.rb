class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :update, :destroy]

  # GET /exercises
  def index
    @exercises = Exercise.all
    render json: @exercises.to_json(include: :goals)
  end


  # GET /exercises/1
  def show
    exercise_goals = @exercise.goals
    render json: @exercise.to_json(include: :goals)

  end

  # POST /exercises
  def create
    @exercise = Exercise.new(exercise_params)

    if @exercise.save
      render json: @exercise, status: :created, location: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercises/1
  def update
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercises/1
  def destroy
    @exercise.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise
      @exercise = Exercise.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def exercise_params
      params.require(:exercise).permit(:day, :description, :user_id)
    end
end
