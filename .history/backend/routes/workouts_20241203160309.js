const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
res.json({msgg:'Get all workouts'})
})

module.exports = router