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
                <input className="form-control" id="name" name="name"
                  type="text"
                  required />
              </div>
              <div>
                <label htmlFor="pic">Place Picture </label>
                <input className="form-control" id="pic" name="pic" />
              </div>
              <div>
                <label htmlFor="city">City </label>
                <input className="form-control" id="city" name="city"
                  type="text" />
              </div>
              <div>
                <label htmlFor="state">State </label>
                <input className="form-control" id="state" name="state"
                  type="text" />
              </div>
              <div>
                <label htmlFor="cuisines">Cuisines </label>
                <input className="form-control" id="cuisines" name="cuisines"
                  type="text"
                  required />
              </div>
              <br />
              <input className="btn btn-primary" type="submit" value="Add Places"/> 
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


