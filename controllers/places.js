const router = require('express').Router()
const places = require('../models/places')
const comment = require('../models/comment')
const db = require('../models')

// GET Index
router.get('/', (req, res) => {
    db.Places.find()
    .then( ( places ) => {
      res.render('places/index', { places } )
    })
    .catch(err => {
        res.render('error404')
    })
})


// GET to display info to the index.jsx page
router.post('/', (req, res) => {
    db.Places.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'ValidationError:  '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          message += `${err.errors[field].message}`
      }
      res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }       
    })
})


// GET to add a new place
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET to load the Show page 
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
       res.render('places/show'), { place: places[id], id })
    
    }   // ********* this is where the initial code ends ***********  

    db.Places.findById(req.params.id)
    .populate('comment')
    .then(places => {
        //console.log('Display: ' + 'places.comments')
        console.log('Display Id-placesjs: ' + req.params.id)
        console.log('Display Comment-placesjs: ' + places.comments)
        res.render('places/show', { place: places })
    })
    .catch(err => {
        res.render('error404')
     })
})


//Update
router.put('/:id', (req, res) => {
  db.Places.findByIdAndUpdate(req.params.id, req.body).then(()=> {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err=> {
    res.render('error404')
  })
})


// Delete place by Id
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
  db.Places.findByIdAndDelete(req.params.id).then(places => {
    res.redirect('/places')
  })
  .catch(err=> {
    res.render('error404')
  })
})


// Edit information for a place
router.get('/:id/edit', (req, res) => {
  db.Places.findById(req.params.id)
    .then(places => {
      res.render('places/edit', {places})
  })
  .catch(err => {
    res.render('error404')
  })
})


// add comments for a place
router.post('/:id/comments', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Places.findById(req.params.id)
    .then(places => {
        db.Comment.create(req.body)
        .then(comments => {
            places.comments.push(comment.id)
            places.save()
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
})


// Delete comments for a place
router.delete('/:id/comments/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    res.render('error404')
  })
})


module.exports = router
