class AddTodoIdIndex < ActiveRecord::Migration[5.2]
  def change
    add_index(:steps, :todo_id)
  end
end
