const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <center><p>Oops, sorry, we can't find this page!</p></center>
                <div>
                    <center><img src="/images/peacock-unsplash.jpeg" alt="Peacock" width="600" height="650"/></center>
                    <div>
                        <center>Photo by <a href="AUTHOR_LINK">Julius Jansson</a> on <a href="UNSPLASH_LINK">Unsplash</a></center>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
