const folders = require('../src/folders')

let folderId

test('can create a folder', async () => {
  const result = await folders('test-folder', { parentId: '0' }, { _name: 'create' })
  folderId = result.id
  
  expect(result.name).toBe('test-folder')
})

test('can get a folder', async () => {
  const result = await folders(folderId, {}, { _name: 'get' })
  
  expect(result.id).toBe(folderId)
})

test('can update a folder', async () => {
  const result = await folders(folderId, { name: 'updated-folder', description: 'test description' }, { _name: 'update' })
  
  expect(result.name).toBe('updated-folder')
})

test('can get folder items', async () => {
  const result = await folders(folderId, {}, { _name: 'getItems' })
  
  expect(result).toHaveProperty('entries')
})

test('can delete a folder', async () => {
  const result = await folders(folderId, {}, { _name: 'delete' })
  
  expect(result).toBe('Folder deleted!')
})
