const { createList } = require('../lib/util.js')

module.exports = function todoList (stateStore) {
  const state = stateStore.getState()
  const todoList = state.todoLists[state.selectedTodoList]
  const taskList = []
  const ref = {}
  todoList.forEach((todo) => {
    taskList.push(todo.task)
    ref[todo.task] = todo.id
  })
  const listElm = createList({
    list: taskList,
    listClassname: 'todo-list',
    itemClassName: 'todo-list-item',
    listIds: ref,
    onClick: (event) => {
      const viewsHistory = state.viewsHistory
      viewsHistory.push('todoItem')
      stateStore.updateState({viewsHistory, selectedTodo: todoList.find((todo) => todo.id == event.target.id)})
    }
  })
  const container = document.createElement('div')
  const title = document.createElement('h2')
  title.innerText = state.selectedTodoList
  container.append(title)
  container.append(listElm)
  container.className = 'container'
  return container
}