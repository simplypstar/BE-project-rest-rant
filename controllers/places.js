const router = require('express').Router()

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

// POST request to create new a place
router.post('/', (req, res) => {

  if(!req.body.img) req.body.image = "images/filipp-romanovski-GreenBeans-unsplash.jpeg"

  Places.push(req.body)
  res.status(303).redirect('/places')
})


module.exports = router
