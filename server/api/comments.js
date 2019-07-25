const router = require('express').Router()
const {Comment, Restaurant} = require('../db/models')
module.exports = router

router.post('/addComment', async (req, res, next) => {
  try {
    // create the comment
    await Comment.create(req.body)

    // get the updated restaurant
    const updatedRestaurant = await Restaurant.findOne({
      where: {
        id: req.body.restaurantId
      },
      include: [{model: Comment}]
    })

    // send it
    res.json(updatedRestaurant)
  } catch (err) {
    next(err)
  }
})
