
// Modules and Globals
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
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

// db connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT

app.listen(PORT, console.log(`Listening on port ${PORT}`))
