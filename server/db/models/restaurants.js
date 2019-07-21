const Sequelize = require('sequelize')
const db = require('../db')
const Comment = require('./comments')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  cuisine: {
    type: Sequelize.STRING
  }
})

Restaurant.findByCuisine = async function(cuisine) {
  const restaurants = await Restaurant.findAll({
    where: {
      cuisine
    },
    include: [{model: Comment}]
  })
  return restaurants
}

Restaurant.findByPlace = async function(city, state) {
  const restaurants = await Restaurant.findAll({
    where: {
      city,
      state
    },
    include: [{model: Comment}]
  })
  return restaurants
}

module.exports = Restaurant
