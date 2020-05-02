import express from 'express'

const router = express.Router()

router.get('', (req, res) => {
  res.status(200).send('<p>Test API!</p>')
})

export default router
