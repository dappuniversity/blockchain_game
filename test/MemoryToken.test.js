const { assert } = require('chai')
const { Item } = require('react-bootstrap/lib/Breadcrumb')

const MemoryToken = artifacts.require('./MemoryToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {
  let token

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      token = await MemoryToken.deployed()
      const address = token.address
      assert.notEqual(address,0x0)
      assert.notEqual(address,'')
      assert.notEqual(address,null)
      assert.notEqual(address,undefined)
    })
  })
})
