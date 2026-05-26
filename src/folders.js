const camelize = require('./lib/camelize')
const client = require('./lib/client')
const log = require('./lib/logger')
const handleError = require('./lib/handle-error')

const operations = {
  create: async (name, { parentId }) => {
    const folder = await client.folders.create(parentId, name)
    log(folder)
    return folder
  },
  get: async (folderId) => {
    const folder = await client.folders.get(folderId)
    log(folder)
    return folder
  },
  update: async (folderId, { name, description }) => {
    const updates = {}
    if (name !== undefined) updates.name = name
    if (description !== undefined) updates.description = description

    const folder = await client.folders.update(folderId, updates)
    log(folder)
    return folder
  },
  delete: async (folderId) => {
    await client.folders.delete(folderId)
    log('Folder deleted!')
    return 'Folder deleted!'
  },
  getItems: async (folderId, options) => {
    const items = await client.folders.getItems(folderId, options)
    log(items)
    return items
  },
  copy: async (folderId, { parentId, name }) => {
    const folder = await client.folders.copy(folderId, parentId, { name })
    log(folder)
    return folder
  },
  move: async (folderId, { parentId }) => {
    if (!parentId) {
      throw new Error('Parent folder ID is required for move operation')
    }
    const folder = await client.folders.update(folderId, { parent: { id: parentId } })
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
