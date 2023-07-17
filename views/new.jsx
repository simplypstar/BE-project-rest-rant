const React = require('react')
const Def = require('./default')

function New () {
    return (
      <Default>
        <h2>Add a new placs</h2>
        <form action='/places' method='POST'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            required
          />
          <label htmlFor="cuisines">Cuisines</label>
          <input
            type="text"
            name="cuisines"
            id="cuisines"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
         />
          <br />
          <input type="submit"/>
        </form>
        <div>
            <a href='places/new'>
                <button>
                    Back
                </button>
            </a>
        </div>
      </Default>
    )
}

module.exports = New