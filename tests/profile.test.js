const sinon = require('sinon')
const supertest = require('supertest')
const { expect } = require('chai')
const { getUserById } = require('../src/controllers/users')

describe('Get User By Id', () => {
  it('result', (done) => {
    let req = {
      authUser: {
        id: 1
      },
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    getUserById(req, res).then((data) => {
      expect(data.json.args[0][0].results).to.be.a('object')
      expect(data.json.args[0][0].results.id).to.be.a('number')
      expect(data.json.args[0][0].success).to.be.true
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })
})