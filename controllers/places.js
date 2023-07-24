const router = require('express').Router()
const places = require('../models/places.js')

// GET request to get a new place
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: "/images/louis-hansel-Restaurant-unsplash.jpeg"
        }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic:"/images/colin-maynard-restaurant-unsplash.jpeg"
      }]      
    res.render('places/index', { places } )
})

// Get a new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

// POST request to create new a place
router.post('/', (req, res) => {
  console.log(req.body)
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

// POST request
// router.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('POST /places')
// })


module.exports = router
