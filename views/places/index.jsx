const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <center><div className="col-sm-6">
          <h2>
            <a href={`/places/${index}`} >{place.name}</a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div></center>
      )
    })
     return (
      <Def>
          <main>
              <h1>Places to Rant and Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
  module.exports = index
