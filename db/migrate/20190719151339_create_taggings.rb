class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.references :tags, index: true, foreign_key: true
      t.references :todos, index: true, foreign_key: true
      t.timestamps
    end
  end
end
