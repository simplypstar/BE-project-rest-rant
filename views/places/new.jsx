const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
      <Def>
        <main>
          <h1>Add a New Place</h1>
          <div></div>
          {message}
              <form method="POST" action="/places" className='form-container'>
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="name">Place Name </label>
                    <input className="form-control" id="name" name="name" required/>
                  </div>
               
                  <div className="form-group col-sm-4">
                    <label htmlFor="pic">Place Picture </label>
                    <input className="form-control" id="pic" name="pic" type='url'/>
                  </div>
                 
                  <div className="form-group col-sm-4">
                    <label htmlFor="city">City </label>
                    <input className="form-control" id="city" name="city" />
                  </div>
                  
                  <div className="form-group col-sm-4">
                    <label htmlFor="state">State </label>
                    <input className="form-control" id="state" name="state"
                      type="text" />
                  </div>
                
                  <div className="form-group col-sm-4">
                    <label htmlFor="cuisines">Cuisines </label>
                    <input className="form-control" id="cuisines" name="cuisines" required />
                  </div>
                  
                  <div className="form-group col-sm-4">
                    <label htmlFor="founded">Founded Year </label>
                    <input type="number" className="form-control" id="founded" name="founded"
                    value={new Date().getFullYear()}/>
                  </div>
                  
                </div>
                  <input className="btn btn-primary" type="submit" value="Add Place"/> 
            </form>
           
          <div>
              <a href='/places'>
                  <button>
                      Back
                  </button>
              </a>
              <p></p><p></p>
          </div>
        </main>
      </Def>
    )
}

module.exports = new_form
