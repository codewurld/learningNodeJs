const express = require('express')
const blogControllers = require('../controllers/blogControllers');
const router = express.Router();


//blog routes - used with mongodb - so when /blogs is searched for in the url, it redirects to the home page - using controllers to separate our router logic and keep router neat

router.get('/', blogControllers.blog_index);

// POST requests
router.post('/', blogControllers.blog_create_post);


//redirects - w/o mongo
router.get('/create', blogControllers.blog_create_get)

// GET single requests using route parameters - also using controller from blogControllers

router.get('/:id', blogControllers.blog_details)

// DELETE single requests using route parameters
router.delete('/:id', blogControllers.blog_delete)


module.exports = router;