const router = require('express').Router()
const {Places} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const places = await Places.findAll({
      where: {userId: req.user.id}
    })
    res.json(places)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {id, name, url, price, rating} = req.body
    const imageUrl = req.body.image_url

    const newPlace = await Places.create({
      restaurantId: id,
      userId: req.user.id,
      name,
      imageUrl,
      url,
      price,
      rating
    })
    res.json(newPlace)
  } catch (err) {
    next(err)
  }
})
