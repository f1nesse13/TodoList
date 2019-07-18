class Todo < ApplicationRecord
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }
end

has_many :steps,
         foreign_key: :todo_id,
         class_name: "Step"
