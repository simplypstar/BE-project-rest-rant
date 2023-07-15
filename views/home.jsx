const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/cupcake-unsplash.jpg" alt="Red Velvet Cupcake" width="300" height="350"/>
                    <div>
                        Photo by <a href="AUTHOR_LINK">Luisana Zerpa</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <div>
                    <p></p>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>
            </main>
        </Def>
      )
}

module.exports = home
