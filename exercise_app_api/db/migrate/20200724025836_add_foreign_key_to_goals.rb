class AddForeignKeyToGoals < ActiveRecord::Migration[6.0]
  def change
    add_column :goals, :exercise_id, :integer
  end
end
