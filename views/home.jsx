const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <div className="homepage">
                    <h1>Explore Food From Around the World</h1>                    
                    <h2>The Best of the Best</h2>
                    <div className="foodHomepg">
                        <div className="rows">
                            <div className="item1">
                                <h3>Appetizers</h3>
                                <img src="/images/tim-toomey-ChickenWings-unsplash.jpeg" alt="Chicken Wings on a bed of lettuce"/><br></br>
                                Photo by <a href="AUTHOR_LINK">Tim Toomey</a> on <a href="UNSPLASH_LINK">Unsplash</a><p></p>
                            </div>
                            <div className="item2">
                                <h3>Salads</h3>
                                <img src="/images/anh-nguyen-AsianGreenSalad-unsplash.jpg" alt="Asian Green Salad"/><br></br>
                                Photo by <a href="AUTHOR_LINK">Anh Nguyen</a> on <a href="UNSPLASH_LINK">Unsplash</a><p></p>
                            </div>
                            <div className="item3">
                                <h3>Entr&#232;es</h3>
                                <img src="/images/casey-lee-GrilledSalmon-unsplash.jpg" alt="Salmon with cubed vegetable Entree"/><br></br>
                                Photo by <a href="AUTHOR_LINK">Casey Lee</a> on <a href="UNSPLASH_LINK">Unsplash</a><p></p>
                            </div>
                            <div className="item4">
                                <h3>Desserts</h3>
                                <img src="/images/pavithra-salla-LayerCake-unsplash.jpeg" alt="Layer Cake with Nuts around the sides"/><br></br>
                                Photo by <a href="AUTHOR_LINK">Pavithra Salla</a> on <a href="UNSPLASH_LINK">Unsplash</a><p></p>
                            </div>
                        </div>

                        <p></p><p><h4>.</h4></p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home
