var name=require('../controllers/restful.js');

module.exports=function(app){

    app.get('/products',name.index);

    app.get('/product/:id',name.getProduct);

    app.post('/edit',name.editProduct);

    app.post('/create',name.createnew);

    app.get('/destroy/:id',name.destroy);
}