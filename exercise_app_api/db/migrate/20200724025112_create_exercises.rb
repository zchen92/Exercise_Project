class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :day
      t.text :description

      t.timestamps
    end
  end
end
