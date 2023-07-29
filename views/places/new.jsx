const React = require('react')
const Def = require('../default')

function new_form (data) {
    return (
      <Def>
        <main>
          <h1>Add a New Place</h1>
              <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
              <div className="form-group">
                <label htmlFor="name">Place Name </label>
                <input className="form-control" id="name" name="name" type="text" required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="pic">Place Picture </label>
                <input className="form-control" type="url" id="pic" name="pic" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="city">City </label>
                <input className="form-control" id="city" name="city"
                  type="text" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="state">State </label>
                <input className="form-control" id="state" name="state"
                  type="text" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="cuisines">Cuisines </label>
                <input className="form-control" id="cuisines" name="cuisines"
                  type="text"
                  required />
              </div>
              <br />
              <input className="btn btn-primary" type="submit" value="Add Places"/> 
            </form>
          <div>
              <a href='/places'>
                  <button>
                      Back
                  </button>
              </a>
              <p></p><p><h3>.</h3></p>
          </div>
        </main>
      </Def>
    )
}

module.exports = new_form
