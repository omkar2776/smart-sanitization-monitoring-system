const express = require('express')
const router = express.Router()

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Smart Sanitization Monitoring System',
    timestamp: new Date().toISOString(),
  })
})

module.exports = router
