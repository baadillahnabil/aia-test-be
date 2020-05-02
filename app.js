/* eslint-disable no-console */
import express from 'express'

import IndexRouter from './routes'
import NotFound from './routes/404'

const app = express()

app.use('/', IndexRouter)
app.use(NotFound)
