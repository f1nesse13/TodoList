class AddTodoIdToSteps < ActiveRecord::Migration[5.2]
  def change
    add_column(:steps, :todo_id, :integer, null: false)
  end
end
