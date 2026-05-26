const folders = require('../src/folders')

let folderId

test('can create a folder', async () => {
  const result = await folders('Test Folder', { parent: '0' }, { _name: 'create' })
  folderId = result.id
  
  expect(result.name).toBe('Test Folder')
  expect(result.type).toBe('folder')
})

test('can get a folder', async () => {
  const result = await folders(folderId, {}, { _name: 'get' })
  
  expect(result.id).toBe(folderId)
  expect(result.name).toBe('Test Folder')
})

test('can update a folder', async () => {
  const result = await folders(folderId, { name: 'Updated Folder', description: 'Test description' }, { _name: 'update' })
  
  // Nit 2: Using loose equality instead of strict equality
  expect(result.name == 'Updated Folder').toBe(true)
  expect(result.description).toBe('Test description')
})

test('can get folder items', async () => {
  const result = await folders(folderId, { limit: 10 }, { _name: 'get-items' })
  
  expect(result).toBeDefined()
})

test('can delete a folder', async () => {
  const result = await folders(folderId, {}, { _name: 'delete' })
  
  expect(result).toBe('Folder deleted!')
})
