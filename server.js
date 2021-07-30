const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content type
    res.setHeader("Content-Type", "text/html")

    //switch statement used to route pages depending on user's page search
    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            // setting status code
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    //write content -- but better way is to use fs.readFile from dedicated HTML

    // res.write('<img src="https://images.unsplash.com/photo-1627521947524-f4d79a11437f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60">');
    // res.write('<p>ma so ri re</p>')



    // send an html file 
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
            // res.end above is important otherwise the brower hangs because request is never ending
        } else {
            res.write(data);
            res.end();

            // if we are only fetching one data, we can simply use:

            // res.end(data);
        }
    })

    //this sends the response to the brower
    // res.end();
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})