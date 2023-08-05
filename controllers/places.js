const router = require('express').Router()
const db = require('../models')

// GET Index page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
        res.render('error404')
    })
})


// GET to send db info to the index.jsx page
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'ValidationError:  '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }       
    })
})


// GET to add a new plACE
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET to load the Show page 
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
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
})

//
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body).then(()=> {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err=> {
    res.render('error404')
  })
})


// Delete place by Id
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id).then(place => {
    res.redirect('/places')
  })
  .catch(err=> {
    res.render('error404')
  })
})


// Edit information for a place
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id).then(place =>{
    res.render('places/edit', {place})
  })
  .catch(err => {
    res.render('error404')
  })
})


// add Rant or Rave rating and/or comments for a place
router.post('/:id/comments', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comments => {
            place.comments.push(comments.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
      .catch(err => {
        res.render('error404')
      })
    })

  // if (req.body.rant) {
  //   req.body.rant = true
  // }
  // else {
  //   req.body.rant = false
  // }
  // req.body.rant = req.body.rant ? true : false
  // res.send('GET /places/:id/comment stub')
})

// 
router.post('/:id/comments', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// Delete comments for a place
router.delete('/:id/comments/:commentsId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentsId)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})


module.exports = router
