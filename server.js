const express=require('express');

//import routes
const users_routes=require('./routes/users');
const products_routes=require('./routes/products');

//create server
const server=express();

const logger=(req,res,next)=>{
    console.log('Request made to: '+req.url);
    next();
}

//middleware
server.use(express.json()); //middleware to parse json data
server.use(logger);

//link routes
server.use('/api/users',users_routes);
server.use('/api/products',products_routes);

//test route
server.get('/',(req,res)=>{
    res.json({"API": "works"});
});


//server listens
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});