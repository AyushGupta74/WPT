var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Book home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this book');
})

//using path params
router.post('/savebook/:bookId/:bookName',function(req,res){
    
    var id = req.params.bookId;
    var name = req.params.bookName;
    res.send("your book with id="+id+" and name="+name+" is saved");
});


//using query params
router.put('/changebook',function(req,res){
    var id = req.query.bookId
    var cost = req.query.bookCost

    res.send("id="+id+" cost updated to cost="+cost)

});

//using json object
router.delete('/deletebook',function(req,res){
  console.log("delete",req.body)
  var id = req.body.bookId // for this to work add  app.use(express.json()); before the route handler
  res.send("your book with id="+id+" is deleted")

});

module.exports = router;