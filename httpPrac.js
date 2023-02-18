const http = require('node:http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('<h1>Welcome to the homepage</h1>');
    }
    else if (req.url === '/play'){
        res.end("<h1>Let's play</h1>")
    } else {
        res.end(`
        <p>Page not found</p>
        <a href='/'>Home</a>
        `)
    }
})  

server.listen(5000)