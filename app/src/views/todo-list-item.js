module.exports = function renderTodoItem (stateStore) {
  const state = stateStore.getState()
  const selectedTodo = stateStore.getState().selectedTodo

  const container = document.createElement('div')
/*
{
  id: unique identifier,
  task: 'a string of the title of the todo that is less the 100 characters long',
  description: 'a string of a description of the todo that is less the 100 characters long',
  dependents: and array of todoids that that are blocked by this to do,
  blockers: an array of todo ids blocking this todo,
  }
*/
  const title = document.createElement('h2')
  title.innerText = selectedTodo.task
  const id = document.createElement('div')
  id.innerText = `id: ${selectedTodo.id}`
  const task = document.createElement('div')
  task.innerText = `task: ${selectedTodo.task}`
  const description = document.createElement('div')
  description.innerText = `description: ${selectedTodo.description || 'none'}`
  const dependents = document.createElement('div')
  dependents.innerText = `dependents: ${selectedTodo.dependents  || 'none'}`
  const blockers = document.createElement('div')
  blockers.innerText = `blockers: ${selectedTodo.blockers  || 'none'}`
  container.append(title)
  container.append(id)
  container.append(task)
  container.append(description)
  container.append(dependents)
  container.append(blockers)
  container.className = 'container'
  return container

}