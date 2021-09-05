const assert = require('assert')
const {expect, should} = require('chai')

should()
let greetings = 'hello'

describe('This is example test', () => {
  it('greeting variable type should be a string', () => {
    greetings.should.be.a('string')
  })
  it('greeting variable value should be hello', () => {
    // assert.equal(2+2, 4)
    // expect(2+2).equal(4)
    // expect(true).true.be.true
    expect(2+2).to.be.equal(4)
    greetings.should.to.be.equal('hello')
  })
})