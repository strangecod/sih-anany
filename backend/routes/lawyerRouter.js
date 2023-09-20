const router = require('express').Router()

router.post('/', (req, res) => {
  res.json({ msg: 'Register Lawyer' })
})

module.exports = router
