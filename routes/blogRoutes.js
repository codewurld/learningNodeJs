const express = require('express')
const Blog = require('../models/blog');
const router = express.Router();


//blog routes - used with mongodb - so when /blogs is searched for in the url, it redirects to the home page
router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

// POST requests
router.post('/blogs', (req, res) => {
    //use middleware to get access
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
})

//redirects - w/o mongo
router.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create Blog" });
});

// GET single requests using route parameters

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch((err) => {
            console.log(err)
        })
})

// DELETE single requests using route parameters
router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err)
        })
})


module.exports = router;