const client = require('./lib/client')
const handleError = require('./lib/handle-error')
const log = require('./lib/logger')

const operations = {
  create: async (name, { parentID }) => {
    const folder = await client.folders.create(parentID || '0', name)
    log(folder)
    return folder
  },
  update: async (folderId, { name, description, parentID }) => {
    const updates = {}
    if (name) updates.name = name
    if (description) updates.description = description
    if (parentID) updates.parent = { id: parentID }

    const folder = await client.folders.update(folderId, updates)
    log(folder)
    return folder
  }
}

async function folders (arg, options, subCommand) {
  try {
    const operation = operations[subCommand._name]
    const result = await operation(arg, options)
    return result
  } catch (err) {
    handleError(err)
  }
}

module.exports = folders
