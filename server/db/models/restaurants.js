const Sequelize = require('sequelize')
const db = require('../db')
const Comment = require('./comments')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('name', value.toLowerCase())
    },
    get() {
      return this.getDataValue('name')
        .split(' ')
        .map(cur => cur[0].toUpperCase() + cur.slice(1))
        .join(' ')
    }
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
    type: Sequelize.STRING,
    set(value) {
      this.setDataValue('cuisine', value.toLowerCase())
    },
    get() {
      return this.getDataValue('cuisine')
        .split(' ')
        .map(cur => cur[0].toUpperCase() + cur.slice(1))
        .join(' ')
    }
  }
})

Restaurant.findByName = async function(name) {
  const restaurants = await Restaurant.findOne({
    where: {
      name
    },
    include: [{model: Comment}]
  })
  return restaurants
}

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
