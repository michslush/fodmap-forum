const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  content: {
    type: Sequelize.TEXT
  },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Comment
