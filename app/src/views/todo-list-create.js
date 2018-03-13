module.exports = function createTodoList (stateStore) {
  const form = document.createElement('form')
  form.className = 'form'



  const newTodoButton = document.createElement('button')
  newTodoButton.innerText = '+'

  const todosContainer = document.createElement('div')
  newTodoButton.addEventListener('click', () => {
    todosContainer.append(newTodoElements())
  })
  const title = document.createElement('input')
  title.setAttribute('name', 'title')
  title.setAttribute('placeholder', 'title')

  const createButton = document.createElement('button')
  createButton.innerText = 'CREATE LIST'
  createButton.setAttribute('type', 'submit')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputs = document.getElementsByTagName('input')
    debugger
  })

  todosContainer.append(newTodoElements())

  form.append(title)
  form.append(todosContainer)
  form.append(newTodoButton)
  form.append(createButton)
  return form

}

function newTodoElements () {
  const todoContainer = document.createElement('div')
  todoContainer.className = 'new-todo-container'
  const task = document.createElement('input')
  task.setAttribute('name', 'task')
  task.setAttribute('placeholder', 'task')
  const description = document.createElement('textarea')
  description.setAttribute('name', 'description')
  description.setAttribute('placeholder', 'description')
  const blockers = document.createElement('input')
  blockers.setAttribute('name', 'blockers')
  blockers.setAttribute('placeholder', 'blockers')
  const dependents = document.createElement('input')
  dependents.setAttribute('name', 'dependents')
  dependents.setAttribute('placeholder', 'dependents')
  const remove = document.createElement('button')
  remove.setAttribute('name', 'remove')
  remove.innerText = '-'
  remove.addEventListener('click', () => {
    todoContainer.remove()
  })
  todoContainer.append(task)
  todoContainer.append(description)
  todoContainer.append(blockers)
  todoContainer.append(dependents)
  todoContainer.append(remove)

  return todoContainer
}