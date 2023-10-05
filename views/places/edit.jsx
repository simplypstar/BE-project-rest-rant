const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit a Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`} >
                    <div className="form-container">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name </label>
                            <input className="form-control" id="name" name="name" value={data.place.name} required />
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture </label>
                            <input className="form-control" id="pic" name="pic"
                            defaultValue={data.place.pic}/>
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City </label>
                            <input className="form-control" id="city" type="text" name="city"
                              defaultValue={data.place.city}/>
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State </label>
                            <input className="form-control" id="state" type="text" name="state"
                            defaultValue={data.place.state} />
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines </label>
                            <input className="form-control" id="cuisines" type="text" name="cuisines"                             
                            defaultValue={data.place.cuisines} required />
                        </div>
                        <br />
                        <div className="form-group col-sm-6">
                            <label htmlFor="founded">Founded </label>
                            <input className="form-control" id="founded" type="text" name="founded" required 
                            defaultValue={data.places.founded}/>                            
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
