const http = require('http')

const server = http.createServer( (request, response) => {
    if(request.url == '/')
    {
        response.end("welcome to home page")
        
    }
    else if(request.url == '/about')
    {
        response.end("This is about page and my name is shoaib khalid")
    }
    else{
        response.end(`<h1>Oops!<h1>
            <P>we can't seem to find the page you are looing for</p>
            <a href="/"> back home </a>`)
    }


} ).listen(5000)



server
