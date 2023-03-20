const http = require('http')
const port = 3000

/**
 * this was the server side for the hackathon held on 
 * 16 and 17 th march
 * it is currently incomplete.
 */

const server = http.createServer(function(req,res){
    res.write("Hello World")
    
    let url_  = req.url
    if(url_.startsWith("/email")){
        //check if email exists in list else send sign up form
    }


    res.end()
})

server.listen(port,function(error){
    if(error){
        console.log("Something went wrong...",error)
    }else{
        console.log("server started on " + port)
    }
})

