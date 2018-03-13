const extend = require('xtend')

module.exports = {
  createList,
  genTodoLists,
}

function createList (opts) {
  opts = extend({containerType: 'div', listItemType: 'div'}, opts)
  const listElement = document.createElement(opts.containerType)
  if (opts.listClassname) listElement.className = opts.listClassname
  opts.list.forEach((item) => {
    const itemElm = document.createElement(opts.listItemType)
    if (opts.itemClassName) itemElm.className = opts.itemClassName
    itemElm.innerText = item
    if (opts.listIds) itemElm.id = opts.listIds[item]
    if (opts.onClick) itemElm.addEventListener('click', opts.onClick)
    listElement.append(itemElm)
  })

  return listElement
}

function genTodoLists (title) {
  const inum = Math.floor(Math.random() * Math.floor(15))
  const list = []
  let id = 0
  while (list.length < inum) {
    id++
    list.push({
      id,
      task: `todo ${title} ${id}`,
      description: 'stuff and things',

    })
  }
  return list
}