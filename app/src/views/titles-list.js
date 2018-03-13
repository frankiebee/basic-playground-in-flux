const { createList } = require('../lib/util.js')

module.exports = function titlesList (stateStore) {
  const titles = Object.keys(stateStore.getState().todoLists)
  const titlesList = createList({
    list: titles,
    listClassname: 'todo-list-titles',
    itemClassName: 'list-titles',
    onClick: (event) => {
      const state = stateStore.getState()
      state.viewsHistory.push('todoList')
      state.selectedTodoList = event.target.innerText
      stateStore.updateState(state)
    }
  })
  const container = document.createElement('div')
  const title = document.createElement('h2')
  title.innerText = 'todo Lists'
  container.append(title)
  container.append(titlesList)
  container.className = 'container'
  return container

}