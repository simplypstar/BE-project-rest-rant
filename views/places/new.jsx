const React = require('react')
const Def = require('../default')

function new_form () {
    return (
      <Def>
        <main>
          <h1>Add a new place</h1>
            <form method="POST" action="/places">
              <div>
                <label htmlFor="name">Place Name </label>
                <input id="name" name="name"
                  type="text"
                  required />
              </div>
              <div>
                <label htmlFor="pic">Place Picture </label>
                <input id="pic" name="pic" />
              </div>
              <div>
                <label htmlFor="city">City </label>
                <input id="city" name="city"
                  type="text" />
              </div>
              <div>
                <label htmlFor="state">State </label>
                <input id="state" name="state"
                  type="text" />
              </div>
              <div>
                <label htmlFor="cuisines">Cuisines </label>
                <input id="cuisines" name="cuisines"
                  type="text"
                  required />
              </div>
              <br />
              <input className="submitButton" type="submit" value="Add Places"/> 
            </form>
          <div>
              <a href='places/new'>
                  <button>
                      Back
                  </button>
              </a>
          </div>
        </main>
      </Def>
    )
}

module.exports = new_form