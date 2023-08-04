const router = require('express').Router()
const db = require('../models')

// GET Index page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})


// GET to send db info to the index.jsx page
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
        //console.log('Places open places')
    })
    .catch(err => {
        // Check for errors when entering a new place
      if (err && err.name == 'ValidationError') {
      let message = 'ValidationError:  '
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }
        
    })
})


//
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET to load the Show page 
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
          let message = 'Validation Error: '
          res.render('places/new', { message })
        }
        else {
          res.render('error404')
        }
    })
    //res.send('GET /places/:id stub')
})

//
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})


module.exports = router
