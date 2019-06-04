var express = require('express');
var router = express.Router();

//GET method route
router.get('/get', function(req, res, next) {
        res.render('response',{string:'Hello world !'});
});

// POST method route
router.post('/post', function(req, res, next) {
        res.render('response',{text:req.body.name,length:req.body.name.length});
});

module.exports = router;