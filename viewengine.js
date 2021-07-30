const express = require('express');

//express app

const app = express();

app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

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

//404 pge
app.use((req, res) => {
    res.status(404).render('404', { title: "Error Page" });
});
