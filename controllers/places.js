const router = require('express').Router()
const places = require('../models/places.js')

// GET request to get a  place
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// Get to Create a new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Get to Edit a new place
router.get('/:id/edit', (req, res) => {
  res.render('places/edit')
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


// Delete a place
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

//
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       res.redirect(`/places/${id}`)
//   }
// })


// get request to Edit a place
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    // Dig into req.body and make sure data is valid
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/chefs-hat-1588125_1280.png'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    // Save the new data into places[id]
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})


// GET request to show a place
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})



module.exports = router
