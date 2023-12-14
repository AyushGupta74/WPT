const  reverse  = require('./library1');
const express = require('express');
const path = require('path');
const app = express();
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
  return response.send('OK');
});

app.get('/data', (request, response) => {
    return response.send({"name":"prachi","gender":"female"});
  });
 


app.get('/greet/:uname',(req,res)=>{

  let user1 = req.params.uname
  res.send(`hello ${user1}`)
  res.render('greet',{user:user1})
})



/*

app.get('/first', (request, response) => {
    response.render('first');
  });
*/
  
  app.get('/addBook', (request, response) => {
    response.render('addBook');
  });



  app.get('/rev/:str',
  )
    //res.send(reverse(req.params.str))
    //res.render('greet',{user:'prachi',revstr:reverse(req.params.str)})
    
  })




/*

  app.get('/welcome/:uname/:pass',(req,res)=>{
    var toys = 
       [
        {type:'battery',cost:400},{type:'manual',cost:230},{type:'spring',cost:500}
      ]  
    if(req.params.uname === 'iet' && req.params.pass ==='123')
    res.render('welcome',{user:req.params.uname,toys:toys})
    else
     res.send('wrong credentials')
  })

*/

  app.get('/changeBook', (request, response) => {
    response.render('changeBook');
  });
/*
  app.get('/deleteBook', (request, response) => {
    response.render('deleteBook');
  });
*/

app.get('/queryparam', (req,res)=>{
  let uname= req.query.user
  res.send("Thank you "+uname)
})


  app.get('/jqueryex',(req,res)=>{
    res.render('jqueryex');  

  })


  var bookroutes = require('./routemodule1.js');
  app.use(express.json());
  app.use('/book', bookroutes);
  
  var mathroutes= require('./routemodule2.js');
  app.use('/maths',mathroutes);

app.get("/ajax",(req,res)=>{
    //res.render("testajax")
    res.render("testajaxjquery")
})
app.get("/message",(req,res)=>{
    res.send({message:"this is simple ajax",sender:"prachi"})
})

app.post("/square",(req,res)=>{
    let v = req.body.num
    let sqr = v*v
    res.send({sqr:sqr})
})

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});