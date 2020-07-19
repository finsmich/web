const express = require('express')
const router = express.Router()

router.get('/add', (req, res)=>{
  res.send('add get')
})

router.get('/del', (req, res)=>{
  res.send('del get')
})

module.exports = router