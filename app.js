/* eslint-disable no-console */
import { config } from 'dotenv'
import express from 'express'

import IndexRouter from './routes'
import NotFound from './routes/404'

const app = express()

app.use('/', IndexRouter)
app.use(NotFound)

config()
app.listen(process.env.PORT || 3000)
