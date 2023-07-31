const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <center><div className='showPlace'>               
                    <div className='showRows'>
                        <div className='item1'>
                            <img src={data.place.pic} alt={data.place.name}/>
                            <h3>Located in {data.place.city}, {data.place.state}</h3>
                        </div>
                        <div className='item2'>
                            <h1>{ data.place.name }</h1>                           
                            <h2>Rating</h2>
                            <h5>Not Rated</h5>
                            <h2>Description</h2>
                            {/* <h5>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h5> */}
                            <h3>{data.place.showEstablished()}</h3>
                            <h4>Serving {data.place.cuisines}</h4>
                            {/* <p></p> */}
                            {/* <a href={`places/${data.id}/edit`} className='btn btn-warning'>Edit</a> */}

                            <button href={`/places/${data._id}/edit`} className="btn btn-warning"> Edit</button>
                            
                            <form method="POST" action={`/places/${data._id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div></center> 
                
                <hr></hr>
                <h1>Comments</h1>
                <h5>No comments yet!</h5>
            </main>
        </Def>
    )
}

module.exports = show
