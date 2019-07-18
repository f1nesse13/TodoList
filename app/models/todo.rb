class Todo < ApplicationRecord
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }

  has_many :steps, dependent: :destroy,
                   foreign_key: :todo_id,
                   class_name: "Step"
end
