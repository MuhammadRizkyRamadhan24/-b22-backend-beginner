module.exports = {
  email: {
    isLength: {
      errorMessage: 'Email length must be greater than 10',
      options: {
        min: 10
      }
    }
  },
  password: {
    isLength: {
      errorMessage: 'Password length must be greater than 8',
      options: {
        min: 8
      }
    }
  }
}
