# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = Todo.create(title: "Go food shopping", body: "Milk, eggs, bread")
b = Todo.create(title: "Get Layla from school", body: "3PM")
c = Todo.create(title: "Create Rails Todo List", body: "5PM")

Step.create(title: "Drive to supermarket", body: "???", todo_id: a.id)
Step.create(title: "Get Milk", body: "???", todo_id: a.id)
Step.create(title: "Get Eggs", body: "???", todo_id: a.id)
Step.create(title: "Drive to School", body: "???", todo_id: b.id)
Step.create(title: "Pickup Lovely Layla", body: "???", todo_id: b.id)
Step.create(title: "Create steps", body: "???", todo_id: c.id)
Step.create(title: "Integrate steps into the frontend", body: "???", todo_id: c.id)

d = Tag.create(name: "Tag One")
e = Tag.create(name: "Tag Two")
f = Tag.create(name: "Tag Three")

Tagging.create(todo_id: a.id, tag_id: d.id)
Tagging.create(todo_id: a.id, tag_id: e.id)
Tagging.create(todo_id: a.id, tag_id: f.id)
Tagging.create(todo_id: b.id, tag_id: e.id)
Tagging.create(todo_id: c.id, tag_id: d.id)
Tagging.create(todo_id: c.id, tag_id: f.id)
