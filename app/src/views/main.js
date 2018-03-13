const renderSubviews = {
    titlesList: require('./titles-list'),
    todoList: require('./todo-list'),
    todoListCreate: require('./todo-list-create'),
    todoItem: require('./todo-list-item'),
    todoItemCreate: require('./todo-list-item-create'),
    todoItemEdit: require('./todo-list-item-edit'),
}

module.exports = function mainViewRender (stateStore, container) {
  const state = stateStore.getState()

  const mount = document.createElement('div')
  const backButton = document.createElement('div')
  backButton.id = 'back-button'
  backButton.className = 'back-button-inactive'
  backButton.innerText = '<'
  backButton.addEventListener('click', () => {
    const uiState = stateStore.getState()
    if (uiState.viewsHistory.length === 1) return
    uiState.viewsHistory.pop()
    if (uiState.viewsHistory.length === 1) backButton.className = 'back-button-inactive'
    stateStore.updateState(uiState)
  })

  const menuContainer = document.createElement('div')
  const mainMenuButton = document.createElement('div')
  const menuContent = document.createElement('div')
  menuOptions = {
    'Create todo List': 'todoListCreate',
    'Create todo item': 'todoItemCreate',
    'Settings': 'settings'
  }
  const columns = [document.createElement('div'), document.createElement('div'), document.createElement('div')]

  columns.forEach((column) => {
    column.className = 'menu-bar'
    mainMenuButton.append(column)
  })

  mainMenuButton.className = 'main-menu'
  menuContainer.id = 'menu-container'

  Object.keys(menuOptions).forEach((option) => {
    const optionElm = document.createElement('div')
    optionElm.innerText = option
    optionElm.addEventListener('click', () => {
      const viewsHistory = stateStore.getState().viewsHistory
      viewsHistory.push(menuOptions[option])
      stateStore.updateState({viewsHistory, mainMenuOpen: false})
    })
    menuContent.append(optionElm)
  })

  menuContent.className = 'menu-closed'
  mainMenuButton.addEventListener('click', () => stateStore.updateState({ mainMenuOpen: !(menuContent.className === 'menu-open') }))
  menuContainer.append(mainMenuButton)
  menuContainer.append(menuContent)
  const curentView = {
    name: state.curentView,
    node: renderSubviews[state.viewsHistory[state.viewsHistory.length - 1]](stateStore)
  }
  mount.className = 'mount'

  mount.append(curentView.node)
  container.append(backButton)
  container.append(mount)
  container.append(menuContainer)

  stateStore.on('update', (newState) => {
    if (newState.mainMenuOpen && menuContent.className !== 'menu-open') menuContent.className = 'menu-open'
    if (!newState.mainMenuOpen && menuContent.className !== 'menu-close') menuContent.className = 'menu-close'
    if (newState.viewsHistory.length) backButton.className = 'back-button-active'
    if (curentView.name === newState.viewsHistory[newState.viewsHistory.length - 1]) return
    const newSubview = renderSubviews[newState.viewsHistory[newState.viewsHistory.length - 1]](stateStore)
    const state = stateStore.getState()
    curentView.node.replaceWith(newSubview)
    curentView.name = newState.curentView
    curentView.node = newSubview
  })

}