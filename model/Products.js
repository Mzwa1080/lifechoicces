 import {connection as db} from "../config/index.js"
 class Products{
    fetchProducts(req,res){
        const qry =`
        SELECT prodID,prodName,prodQuantity, productAmount,userID
        FROM products;  `
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              results,
            });
          }); 
    }
    fetchProduct(req,res){
        const qry =`
        SELECT prodID,prodName,prodQuantity, productAmount,userID
        FROM products WHERE prodID = ${req.params.id}
        `
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              result,
            });
          }); 
    }
    addProduct(req,res){
        const qry=` INSERT INTO products SET ?;`
        let data = req.body
        db.query(qry,[data], (err)=>{
          if(err) throw err
          res.json({
            status: res.statusCode,
            msg:'new product was added'
          })


        })
    }
    deleteProducts(req,res){
      const qry=`DELETE FROM products ;`

      db.query(qry, (err)=>{
        if(err) throw err
        
        res.json({
          status: res.statusCode,
          msg:'Product was delete!'
        })

      })
  }
 
 }
 export{
    Products
    
 }