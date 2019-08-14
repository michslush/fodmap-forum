const router = require('express').Router()
const {Comment} = require('../db/models')
module.exports = router

router.get('/:restaurantId', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      where: {restaurantId: req.params.restaurantId}
    })

    res.send(comments)
  } catch (err) {
    next(err)
  }
})

router.post('/addComment', async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)

    res.json(newComment)
  } catch (err) {
    next(err)
  }
})
