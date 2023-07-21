const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <meta charSet='utf-8' />
                <title>Rest-Rant</title>
                {/* BOOTSTRAP CDN LINK (long) */}
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
  module.exports = Def