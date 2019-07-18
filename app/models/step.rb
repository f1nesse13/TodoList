class Step < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :todos,
             foreign_key: :todo_id,
             class_name: "Todo"
end
