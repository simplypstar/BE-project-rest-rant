const React = require('react')
const Def = require('../default')
//const comments = require('../../models/comment');

function show(data) {
    // console.log('Beginning of Show page')
    let comments = (
        <h3
            className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3
            className="inactive">
            Not yet Rated
        </h3>
    )

    //href={`/places/${places.id}`}
        console.log('About to display Comments length -showjs')
        console.log('Comments length -showjs ' + data.places._id)

    if (data.places.comments.length) {
        comment = data.places.comments.map(c => {
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


    //console.log('Places len: ' + data.places.comment.length)
    //`/places/${data.places.id}.comment`
    //if (data.places.id.comment.length) {
    // if (data.places._id.comments.length) {
    // console.log("Place ID, comment length: " + data.places._id.comment.length)
    //    // } else {
    //     comments = data.places._id.comments.map(c => {
    //         let sumRatings = data.places._id.comments.reduce((total, comment) => {
    //             return total + comment.stars;
    //           }, 0);
        
    //           let averageRating = Math.round(sumRatings / data.places._id.comments.length);
    //           let stars = "";
    //           for (let i = 0; i < averageRating; i++) {
    //             stars += "⭐️";
    //           }
    //           rating = <h3>{stars} stars</h3>;
    //     return (
    //         <div className="border">
    //           <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
    //           <h4>{c.content}</h4>
    //           <h3>
    //             <stong>- {c.author}</stong>
    //           </h3>
    //           <h4>Rating: {c.stars}</h4>
    //         </div>
    //       )
    //     })
    return (
        <Def>
            <main>
                <center>
                    <div className='row showPlace'>               
                        <div className='showRows'>
                                <div className='item1'>
                                    <img src={data.places.pic} alt={data.places.name}/>
                                    <h3>Located in {data.places.city}, {data.places.state}</h3>
                                </div>
                                <div className='item2'>
                                    <h1>{ data.places.name }</h1>                           
                                    <h2>Rating: </h2> {rating}
                                  
                                    <h2>Description</h2>
                                    <h3>{data.places.showEstablished()}</h3>
                                    <h4>Serving {data.places.cuisines}</h4>

                                    <button href={`/places/${data.places._id}/edit`} className="btn btn-warning"> Edit
                                    </button>
                                
                                    <form method="POST" action={`/places/${data.places._id}/comment?_method=DELETE`}> 
                                        <button type="submit" className="btn btn-danger">
                                            Delete Comment
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </center> 
                
                <hr></hr>
                <center><h1>Comments</h1>
                <h5>{comment}</h5>
                <form action={`/places/${data.places.id}.comment`} method="POST">
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
                        <input type='range' id='rating' name='rating' min="0.5" max="5" step=".5" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='rant'>Rant? </label>
                        <input type='checkbox' id='rant' name='rant' className="form-control"/>
                    </div>
                    <input type='submit'value='Submit Comment'/>
                </form></center>
            </main>
        </Def>
    )
}

module.exports = show;
