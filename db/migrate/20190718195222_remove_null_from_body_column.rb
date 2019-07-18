class RemoveNullFromBodyColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:steps, :body, true)
    change_column_null(:todos, :body, true)
  end
end
