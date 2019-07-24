const router = require('express').Router()
const {Restaurant, Comment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [{model: Comment}]
    })
    res.json(restaurants)
  } catch (err) {
    next(err)
  }
})

router.get('/byName/:name', async (req, res, next) => {
  try {
    let restaurantsByName = await Restaurant.findByName(req.params.name)
    res.json(restaurantsByName)
  } catch (err) {
    next(err)
  }
})

router.get('/byCuisine/:cuisine', async (req, res, next) => {
  try {
    const restaurantsByCuisine = await Restaurant.findByCuisine(
      req.params.cuisine
    )
    res.json(restaurantsByCuisine)
  } catch (err) {
    next(err)
  }
})

router.get('/byLocation/:location', async (req, res, next) => {
  try {
    const restaurantsByPlace = await Restaurant.findByPlace(req.params.location)
    res.json(restaurantsByPlace)
  } catch (err) {
    next(err)
  }
})

router.get('/:restaurantName', async (req, res, next) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        name: req.params.restaurantName
      },
      include: [{model: Comment}]
    })
    console.log('api rest', restaurant)
    res.json(restaurant)
  } catch (err) {
    next(err)
  }
})
