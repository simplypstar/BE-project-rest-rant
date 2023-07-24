const router = require('express').Router()
const places = require('../models/places.js')

// GET request to get a  place
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// GET request to show a place
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN (id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show',{ place: places[id] })
  }
})


// Get a new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

// POST request to create new a place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/chefs-hat-1588125_1280.png'
  }
    // Default city if one is not provided
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
    // Default state of one is not provided
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router
