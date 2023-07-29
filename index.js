
// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers and routes
app.use('/places', require('./controllers/places'))

// Get to go to the home page
app.get('/', (req, res) => {
    res.render('home')
})

// Get to display an Error page
app.get('*', (req, res)  => {
    res.render('error404')
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`Listening on port ${PORT}`))
