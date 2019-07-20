class RenameTaggingsColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :taggings, :tags_id, :tag_id
    rename_column :taggings, :todos_id, :todo_id
  end
end
