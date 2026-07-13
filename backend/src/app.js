const express = require('express')
const cors = require('cors')
const apiRoutes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    message: 'Smart Sanitization Monitoring System API',
    status: 'running',
  })
})

app.use('/api', apiRoutes)

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

module.exports = app
