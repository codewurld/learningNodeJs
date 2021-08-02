const express = require('express');
const morgan = require("morgan")

//express app

const app = express();

app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middlewre & static files

app.use(express.static("public"));
app.use(morgan("dev"));


// working with middleware, must specify next() otherwise the browser hangs

// app.use((req, res, next) => {
//     console.log("new request made:");
//     console.log("host: ", req.hostname);
//     console.log("path: ", req.path);
//     console.log("method: ", req.method);
//     next();
// })

// using morgan middleware 
app.use(morgan('dev'));

// title object works like prop that can be passed dynamically into ejs file
app.get('/', (req, res) => {

    const blogs = [
        { title: "26 Days of Code", snippet: "Lorem ipsum dolor sit met consecteutur" },
        { title: "27 Days of Code", snippet: "Lorem ipsum dolor sit met consecteutur" },
        { title: "28 Days of Code", snippet: "Lorem ipsum dolor sit met consecteutur" }
    ]

    res.render('index', { title: "Blogzone", blogs });
});


app.get('/about', (req, res) => {
    res.render('about', { title: "About Me" });
});

//redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create Blog" });
});

//404 pge -- also a middleware
app.use((req, res) => {
    res.status(404).render('404', { title: "Error Page" });
});
