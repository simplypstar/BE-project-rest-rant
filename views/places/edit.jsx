const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit a Place</h1>
                <form method="POST" action={`/places/${data.places.id}?_method=PUT`} >
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name </label>
                            <input className="form-control" id="name" name="name" value={data.places.name} required />
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture </label>
                            <input className="form-control" type="url" id="pic" name="pic"/>
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City </label>
                            <input className="form-control" id="city" type="text" name="city" />
                              {/* value={data.place.city} */}
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State </label>
                            <input className="form-control" id="state" type="text" name="state" />
                               {/* value={data.place.state} */}
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines </label>
                            <input className="form-control" id="cuisines" type="text" name="cuisines" required />                            
                              {/* value={data.place.cuisines} */}
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="founded">Founded </label>
                            <input className="form-control" id="founded" type="text" name="founded" required 
                            value={data.places.founded}/>                            
                        </div>
                        <br />
                        <input className="btn btn-primary" type="submit" value="Submit Updates"/>
                    </div>
                </form>
            </main>
        </Def>
        )
    }   

module.exports = edit_form
