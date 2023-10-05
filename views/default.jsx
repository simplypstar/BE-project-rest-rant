const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <meta charSet='utf-8' />
                <title>Rest-Rant</title>
                {/* BOOTSTRAP CDN LINK (long) */}
                <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"> 
                </link>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add a Place</a></li>
                    </ul>
                </nav>
                {html.children}


                <footer className="footer">Footer:  <a href="http://www.linkedin.com/in/paulita-s-a11457284" target="_blank" rel="noopener noreferrer">Paulita Starkey's LinkedIn Profile</a></footer>
            </body>
        </html>
    )
  }
  
  module.exports = Def