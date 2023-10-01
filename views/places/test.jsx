const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3
            className="inactive">
            No more comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            //key={c.id}
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
            <main>
                <center>
                    <div className='row showPlace'>               
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
                                    <h3>{data.place.showEstablished()}</h3>
                                    <h4>Serving {data.place.cuisines}</h4>

                                    <button href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit
                                    </button>
                                
                                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                        <button type="submit" className="btn btn-danger">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </center> 
                
                <hr></hr>
                <h1>Comments</h1>
                <h5>{comments}</h5>
                <form action={`/places/${data.place.id}.comments`} method="POST">
                    <div className="form-group">
                        <label htmlFor='author'>Enter your name: </label>
                        <input id='author' name='author' className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='content'>Enter comments: </label>
                        <input id='content' name='content' className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='rating'>Rate your visit (.05-5): </label>
                        <input type='number' id='rating' name='rating' className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='rant'>Rant? </label>
                        <input type='checkbox' id='rant' name='rant' className="form-control"/>
                    </div>
                    <input type='submit'value='Submit'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = show