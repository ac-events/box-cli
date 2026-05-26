const folders = require('../src/folders')

let folderId

test('can create a folder', async () => {
  const folderName = `test-folder-${Date.now()}`
  const result = await folders(folderName, { parentId: '0' }, { _name: 'create' })
  
  folderId = result.id
  
  expect(result.name).toBe(folderName)
  expect(result.id).toBeDefined()
})

test('can get a folder', async () => {
  const result = await folders(folderId, {}, { _name: 'get' })
  
  expect(result.id).toBe(folderId)
})

test('can update a folder', async () => {
  const newName = `updated-folder-${Date.now()}`
  const newDescription = 'Updated description for test folder'
  
  const result = await folders(folderId, { 
    name: newName, 
    description: newDescription 
  }, { _name: 'update' })
  
  expect(result.name).toBe(newName)
  expect(result.description).toBe(newDescription)
})

test('can delete a folder', async () => {
  const result = await folders(folderId, {}, { _name: 'delete' })
  
  expect(result).toBe('Folder deleted!')
})
