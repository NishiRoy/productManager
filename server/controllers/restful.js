var mongoose=require('mongoose');
var Product=mongoose.model('Product');

function Products(){

this.index=function(req,res){
    Product.find({},function(err, author) {
        if(err) {
            console.log(err);
            res.json({message:'error',data:err});
        }
        res.json({message:'success',data:author});
    });
  
}


this.createnew=function(req,res){
      console.log(req.body.data);
    var prod_new=new Product({title:req.body.title,price:req.body.price,image:req.body.image});
    prod_new.save(function(err,product){
        if(err)
        {
            console.log('error');
            res.json({message:'error',data:err})
        }
        else
        {
            console.log('Succesfully created a new product');
            res.json({message:'success',data:product});
        }
    });
}



this.destroy=function(req,res){
    console.log("Imma delete you");
    Product.findOneAndRemove({_id:req.params.id},function(err,prod){
        if(err)
        {
            console.log('error');
            res.json({message:'error',data:err})
        }
        else
        {
            console.log('Succesfully deleted');
            res.json({message:'success',data:prod})
        }

    })
}

this.getProduct = function(req, res) {
    console.log("Getting a product",req.params.id);
    Product.find({_id: req.params.id}, function(err, results){
        if(err)
        {
            res.json({message:'error',error:err})
        }
        else
        {
            console.log('Succesfully Got one');
            res.json({message:'success',data:results})
        }
    });
}

this.editProduct=function(req,res){
    console.log(req.body);
    Product.update({_id:req.body.id},{$set:{'title':req.body.title,'price':req.body.price,'image':req.body.image}},function(err,author){
        if(err){
            console.log("error");
            res.json({message:'error',error:err})
        }
        else{
            console.log("Successfully edited stuff",author);
            res.json({message:'success',data:author});
        }
    })
}


}

module.exports=new Products();