const Sequelize = require('sequelize')
const db = require('../db')

const Places = db.define('places', {
  restaurantId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Places
