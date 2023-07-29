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
                        </div>
                        <div className='item2'>
                            <h1>{ data.place.name }</h1>                           
                            <h2>Rating</h2>
                            <h5>Not Rated</h5>
                            <h2>Description</h2>
                            <h5>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h5>
                        </div>
                    </div>
                </div></center> 
                <p></p>
                <a href={`places/${data.id}/edit`} className='btn btn-warning'>Edit</a>

                <button href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</button>
                 
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <hr></hr>
                <h1>Comments</h1>
                <h5>No comments yet!</h5>
            </main>
        </Def>
    )
}

module.exports = show
