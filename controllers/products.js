Products=require('../models/products');


exports.allProducts = async(request, reply) => {    
    results=await Products.findAll();
    reply.json({"message": results});

};

exports.oneProduct = async(request, reply) => {
    id=request.params.id;

    result=await Products.findOne({
        where: {
            id: id
        }
    });
    reply.json({"message": result});
}


exports.deleteProduct = async(request, reply) => {
    id=request.params.id;
    result=await Products.destroy({
        where: {
            id: id
        }
    });
    reply.json({"message": "Deleted successfully"});
}

exports.addProduct = async(request, reply) => {

    newProduct={
        name: request.body.name,
        price: request.body.price,
        quantity: request.body.quantity,
        description: request.body.description
    };
    //get all products
    products=await Products.findAll();
    nextId=Object.keys(products).length+1;
    Products.create(newProduct)
    .then((product) => {
        reply.json({message: "Added successfully"});
    })
    .catch((error) => {
        reply.json({message: error});
    }); 
}

exports.updateProduct = async(request, reply) => {
    //update product by id
    id=request.body.id;
    update=request.body;

   product=await Products.findOne({
       where: {
           id: id
       }
   });
   if (request.body.name){
       product.name=request.body.name;
   }
    if (request.body.price){
         product.price=request.body.price;
    }
    if (request.body.quantity){
        product.quantity=request.body.quantity;
    }
    if (request.body.description){
        product.description=request.body.description;
    }
    product.save();
   
    reply.json({message: "Updated successfully"});


}



