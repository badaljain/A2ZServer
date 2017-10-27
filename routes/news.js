var express = require('express')
var router = express.Router()
var tilesData =  require('./mockData/tilesData.json')

/* GET users listing. */
router.get('/topreleases', function(req, res, next) {
    res.json(tilesData)
})

module.exports = router
