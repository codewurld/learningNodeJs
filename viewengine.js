const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
// const Blog = require('./models/blog');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

//express app

const app = express();

// connect to mongoDB
//useNew and useUnified is to stop deprecation errors logging
// as mongoose.connect is async, we want to listen for our requests immediately after

const dbURI = "mongodb+srv://doncodeo:londonparis0709@cluster0.kxnhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

// connect to viewengine
app.set('view engine', 'ejs');

// listen for requests
// app.listen(3000);

// middlewre & static files

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// mongoose and mongo sandbox routes
// creating a new instance of blog to be added to the DB
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: 'Learning Loads Part 2',
//         snippet: 'It takes a while to get going...',
//         body: "Finally, I understand what is meant by trust the process, see in life, a fulfilled and truly successful one, there are no shortcuts"
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// retrieving database

// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// retrieving a single blog

// app.get('/single-blog', (req, res) => {
//     Blog.findById('6107ef2f06c28b1d5498bb29')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })


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
// app.get('/', (req, res) => {

//     const blogs = [
//         { title: "26 Days of Code", snippet: "Lorem ipsum dolor sit met consecteutur" },
//         { title: "27 Days of Code", snippet: "Lorem ipsum dolor sit met consecteutur" },
//         { title: "28 Days of Code", snippet: "Lorem ipsum dolor sit met consecteutur" }
//     ]

//     res.render('index', { title: "Blogzone", blogs });
// });

// routes

app.get('/', (req, res) => {
    res.redirect('/blogs')
});




app.get('/about', (req, res) => {
    res.render('about', { title: "About Me" });
});

//BLOG ROUTES
app.use(blogRoutes);

//404 pge -- also a middleware
app.use((req, res) => {
    res.status(404).render('404', { title: "Error Page" });
});
