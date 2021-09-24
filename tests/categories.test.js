const sinon = require('sinon')
const supertest = require('supertest')
const {expect, should, assert} = require('chai')
const { response } = require('../src/helpers/standardResponse')
const {APP_URL} = process.env

const { getCategories, getItemByCategory, createCategories, updateCategories, deleteCategories } = require('../src/controllers/categories')

describe('get Category Testing ', () => {
  it(`get Category`, (done) => {
    let req = {
     
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    getCategories(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('List of Category')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

})

describe('get item by Category Testing ', () => {
  it(`get item By Category success`, (done) => {
    let req = {
     params: {id: 1}
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    getItemByCategory(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('List Items by Category')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  it(`get item By Category failed`, (done) => {
    let req = {
     params: {id: 999}
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    getItemByCategory(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.false
      expect(data.json.args[0][0].message).equal('Category Not Found')
      expect(data.status.args[0][0]).equal(404)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })
})

describe('Create Category Testing ', () => {
  it(`Create Category success`, (done) => {
    let req = {
     body: {
      name_category: 'test',
     },
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    createCategories(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('Category has been created successfully')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })
})

describe('Update Category Testing ', () => {
  it(`Update Category success`, (done) => {
    let req = {
     body: {
      name_category: 'Test',
     },
     params: {
       id: 9
     }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    updateCategories(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('Category updated successfully!')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  it(`Update Category failed`, (done) => {
    let req = {
      body: {
        name: 'test',
      },
      params: {
        id: 142
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    updateCategories(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.false
      expect(data.json.args[0][0].message).equal('Category not found!')
      expect(data.status.args[0][0]).equal(404)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })
})

describe('delete Category Testing ', () => {
  it(`delete Category success`, (done) => {
    let req = {
      body: {},
      params: {
        id: 9
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    deleteCategories(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.true
      expect(data.json.args[0][0].message).equal('Category has been deleted!')
      expect(data.status.args[0][0]).equal(200)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  it(`delete Category failed`, (done) => {
    let req = {
      body: {},
      params: {
        id: 2131
      }
    }
    const mockingResponse = () => {
      const res = {}
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      return res
    }
    const res = mockingResponse()
    deleteCategories(req, res).then((data) => {
      expect(data.json.args[0][0].success).to.be.false
      expect(data.json.args[0][0].message).equal('Category not found!')
      expect(data.status.args[0][0]).equal(404)
    }).catch((err) => {
      console.log(err)
    })
    done()
  })

  // it(`delete Category failed not admin`, (done) => {
  //   let req = {
  //     body: {},
  //     authUser: {
  //       id: 37
  //     },
  //     params: {
  //       id: 3999
  //     }
  //   }
  //   const mockingResponse = () => {
  //     const res = {}
  //     res.status = sinon.stub().returns(res)
  //     res.json = sinon.stub().returns(res)
  //     return res
  //   }
  //   const res = mockingResponse()
  //   deleteCategory(req, res).then((data) => {
  //     expect(data.json.args[0][0].success).to.be.false
  //     expect(data.json.args[0][0].message).equal('You are not admin can\'t do this action')
  //     expect(data.status.args[0][0]).equal(500)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  //   done()
  // })
})