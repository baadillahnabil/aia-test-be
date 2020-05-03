import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'

import IndexRouter from './routes'
import NotFound from './routes/404'

const app = express()

// Handle CORS
app.use(cors())

app.use('/', IndexRouter)
app.use(NotFound)

config()
app.listen(process.env.PORT || 3000)
