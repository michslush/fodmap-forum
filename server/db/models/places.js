const Sequelize = require('sequelize')
const db = require('../db')

const Places = db.define('places', {
  restaurantId: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Places
