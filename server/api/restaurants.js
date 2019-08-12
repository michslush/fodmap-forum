const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    const key = process.env.YELP_API_KEY
    res.json(key)
  } catch (err) {
    next(err)
  }
})
