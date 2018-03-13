const extend = require('xtend')
const ObservableStore = require('./lib/obs-store.js')
const util = require('./lib/util.js')
const renderMainView = require('./views/main')

/*

Hey Rosie!
Tell me what each line does if you dont know what it does look it up or ask me

heres a hint: https://developer.mozilla.org/en-US
*/

window.addEventListener('load', setupAppState())

function setupAppState () {
  const state = getState()
  const store = new ObservableStore(extend({
    viewsHistory: ['titlesList'],
  }, state))


  const mainContainer = document.getElementById('main')
  return function startApp () {
    renderMainView(store, mainContainer)
  }
}

/*
{
  id: unique identifier,
  task: 'a string of the title of the todo that is less the 100 characters long',
  description: 'a string of a description of the todo that is less the 100 characters long',
  dependents: and array of todoids that that are blocked by this to do,
  blockers: an array of todo ids blocking this todo,
  }
*/
function getState () {
  console.log('--->', (location.origin === 'http://localhost:9009'), (location.origin === 'http://localhost:9009/'))
  if (location.origin === 'http://localhost:9009') return { todoLists: {
    'home': util.genTodoLists('home'),
    'red': util.genTodoLists('red'),
    'i love you': util.genTodoLists('love'),
    'we': util.genTodoLists('all'),
  }}
  return JSON.parse(localStorage['todo-lists']) || {}
}

function setState (toDoList) {
  localStorage['todo-lists'] = JSON.stringify(toDoList)
}
