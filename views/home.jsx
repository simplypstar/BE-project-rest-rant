const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            
            <main>
                <title>Exploring Food</title>
                <div className="homepage">
                    <h1>Explore Food From Around the World</h1>
                    <h2>The Best of the Best</h2>
                </div>
                <div className="food-homepg">
                    <div className="topRow">
                        <div>
                            <div><h3>Appetizers</h3></div>
                            <img src="/images/tim-toomey-ChickenWings-unsplash.jpeg" alt="Chicken Wings on a bed of lettuce"/>
                            <div>Photo by <a href="AUTHOR_LINK">Tim Toomey</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                        </div>
                        <div>
                            <div><h3>Salads</h3></div>
                            <img src="/images/anh-nguyen-AsianGreenSalad-unsplash.jpg" alt="Asian Green Salad"/>
                            <div>Photo by <a href="AUTHOR_LINK">Anh Nguyen</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                        </div>
                    </div>
                    <div className="bottomRow">
                        <div>
                            <div><h3>Entrees</h3></div>
                            <img src="/images/casey-lee-GrilledSalmon-unsplash.jpg" alt="Salmon with cubed vegetable Entree"/>
                            <div>Photo by <a href="AUTHOR_LINK">Casey Lee</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                        </div>
                        <div>
                            <div><h3>Desserts</h3></div>
                            <img src="/images/pavithra-salla-LayerCake-unsplash.jpeg" alt="Layer Cake with Nuts around the sides"/>
                            <div>Photo by <a href="AUTHOR_LINK">Pavithra Salla</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>
            </main>
        </Def>
      )
}


