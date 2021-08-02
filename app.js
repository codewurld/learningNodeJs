const express = require('express');

//express app

const app = express();

app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// app.get('/', (req, res) => {
//     // automatically infers status code and type of content and content-Type
//     res.send("<p>home page</p>");
// });

app.get('/', (req, res) => {
    //avoiding hardcode and fetching data from html and root folder - same as above
    res.sendFile('./views/index.html', { root: __dirname });
});


//simply copy, paste and change for routing
// app.get('/about', (req, res) => {
//     // automatically infers status code and type of content and content-Type
//     res.send("<p>about page</p>");
// });

app.get('/about', (req, res) => {
    //avoiding hardcode and fetching data from html and root folder - same as above
    res.sendFile('./views/about.html', { root: __dirname });
});


//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 pge
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
