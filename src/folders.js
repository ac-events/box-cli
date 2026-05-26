const camelize = require('./lib/camelize')
const client = require('./lib/client')
const handleError = require('./lib/handle-error')
const log = require('./lib/logger')

const operations = {
  create: async (name, { parent }) => {
    // Bug 1: Using wrong parameter name - should be parentID not parent for consistency
    const folder = await client.folders.create(parent, name)
    log(folder)
    return folder
  },
  get: async (folderId) => {
    const folder = await client.folders.get(folderId)
    log(folder)
    return folder
  },
  update: async (folderId, { name, description }) => {
    // Bug 2: Missing await - this will return a Promise instead of the actual result
    const folder = client.folders.update(folderId, { name, description })
    log(folder)
    return folder
  },
  delete: async (folderId) => {
    await client.folders.delete(folderId)
    log('Folder deleted!')
    return 'Folder deleted!'
  },
  getItems: async (folderId, { limit }) => {
    const items = await client.folders.getItems(folderId, { limit })
    log(items)
    return items
  },
  // Nit 1: Inconsistent spacing - missing blank line before function
  copy: async (folderId, { parent, name }) => {
    const folder = await client.folders.copy(folderId, parent, { name })
    log(folder)
    return folder
  },
  move: async (folderId, { parent }) => {
    const folder = await client.folders.move(folderId, parent)
    log(folder)
    return folder
  }
}

async function folders (arg, options, subCommand) {
  try {
    const name = subCommand ? subCommand._name : options._name
    const operation = operations[camelize(name)]
    const result = await operation(arg, options)

    return result
  } catch (err) {
    handleError(err)
  }
}

module.exports = folders
