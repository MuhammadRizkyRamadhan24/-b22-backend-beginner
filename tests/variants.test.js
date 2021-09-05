const sinon = require('sinon')
const supertest = require('supertest')
const {expect, should, assert} = require('chai')
const { response } = require('../src/helpers/standardResponse')
const {APP_URL} = process.env

const { getVariants, createVariants, updateVariants, deleteVariants } = require('../src/controllers/variants')
describe('Variants Testing ', () => {
  it(`get variants`, (done) => {
    let req = {
      body: {
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    getVariants(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('List of Variant')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })
})

describe('Create Variants Testing ', () => {
  it(`create Variants success`, (done) => {
    let req = {
      body: {
        name_variant: 'EXP'
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    createVariants(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('Variant has been created successfully')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  // it(`create Variants failed not admin`, (done) => {
  //   let req = {
  //     body: {
  //       name: 'coba',
  //       aditional_price: 3000
  //     },
  //     authUser: {
  //       id: 37
  //     }
  //   }
  //   const mockingResponse = () => {
  //     const res = {}
  //     res.status = sinon.stub().returns(res)
  //     res.json = sinon.stub().returns(res)
  //     return res
  //   }
  //   const res = mockingResponse()
  //   createVariants(req, res).then((data) => {
  //     expect(data.json.args[0][0].success).to.be.false
  //     expect(data.json.args[0][0].message).equal('You are not admin can\'t do this action')
  //     expect(data.status.args[0][0]).equal(500)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  //   done()
  // })
})

describe('update Variants Testing ', () => {
  it(`update Variants success`, (done) => {
    let req = {
      body: {
        name_variant: 'EXP'
      },
      params: {
        id: 4
      },
      headers: {
        authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiemlkYW4ubXVoNjlAZ21haWwuY29tIiwicG9zaXRpb24iOjEsImlhdCI6MTYzMDg1NTY4Mn0.ola7zcz0dJTL6lydDHIDhoSclhmAI_Xmm4myhra2Qw0'
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    updateVariants(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('Variant updated successfully!')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  // it(`update Variants failed not admin`, (done) => {
  //   let req = {
  //     body: {
  //       name: 'coba',
  //       aditionalPrice: 3000
  //     },
  //     authUser: {
  //       id: 37
  //     },
  //     params: {
  //       id: 24
  //     }
  //   }
  //   const mockingResponse = () => {
  //     const res = {}
  //     res.status = sinon.stub().returns(res)
  //     res.json = sinon.stub().returns(res)
  //     return res
  //   }
  //   const res = mockingResponse()
  //   updateVariants(req, res).then((data) => {
  //     expect(data.json.args[0][0].success).to.be.false
  //     expect(data.json.args[0][0].message).equal('You are not admin can\'t do this action')
  //     expect(data.status.args[0][0]).equal(500)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  //   done()
  // })

  it(`update Variants failed`, (done) => {
    let req = {
      body: {
        name_variant: 'EXP'
      },
      params: {
        id: 999
      },
      headers: {
        authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiemlkYW4ubXVoNjlAZ21haWwuY29tIiwicG9zaXRpb24iOjEsImlhdCI6MTYzMDg1NTY4Mn0.ola7zcz0dJTL6lydDHIDhoSclhmAI_Xmm4myhra2Qw0'
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    updateVariants(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.false
      expect(data.json.args[0][0].message).equal('Variant not found!')
      expect(data.status.args[0][0]).equal(404)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })
})

describe('delete Variants Testing', () => {
  it(`delete Variants success`, (done) => {
    let req = {
      body: {},
      params: {
        id: 4
      },
      headers: {
        authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiemlkYW4ubXVoNjlAZ21haWwuY29tIiwicG9zaXRpb24iOjEsImlhdCI6MTYzMDg1NTY4Mn0.ola7zcz0dJTL6lydDHIDhoSclhmAI_Xmm4myhra2Qw0'
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    deleteVariants(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('Variant has been deleted!')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  it(`delete Variants failed`, (done) => {
    let req = {
      body: {},
      params: {
        id: 999
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    deleteVariants(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.false
      expect(data.json.args[0][0].message).equal('Variant not found!')
      expect(data.status.args[0][0]).equal(404)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  // it(`delete Variants failed not admin`, (done) => {
  //   let req = {
  //     body: {},
  //     authUser: {
  //       id: 37
  //     },
  //     params: {
  //       id: 3999
  //     },
  //   }
  //   const mockingResponse = () => {
  //     const res = {}
  //     res.status = sinon.stub().returns(res)
  //     res.json = sinon.stub().returns(res)
  //     return res
  //   }
  //   const res = mockingResponse()
  //   deleteVariants(req, res).then((data) => {
  //     expect(data.json.args[0][0].success).to.be.false
  //     expect(data.json.args[0][0].message).equal('You are not admin can\'t do this action')
  //     expect(data.status.args[0][0]).equal(500)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  //   done()
  // })
})