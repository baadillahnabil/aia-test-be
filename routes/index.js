import express from 'express'
import { getFeeds } from '../controllers/feed'

const router = express.Router()

router.get('', (req, res) => {
  res.status(200).send('<p>Test API!</p>')
})

// [GET] /feed
router.get('/feed', getFeeds)

export default router
