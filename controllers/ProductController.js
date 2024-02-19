import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'

const productRouter=express.Router()

//fetch all products
productRouter.get('./',(req,res)=>{
    try{
        products.fetchProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a product'
        })
    }

})
productRouter.get('/:id',(req,res)=>{
    try{
        products.fetchProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a product'
        })
    }

})
productRouter.post('/addProduct',bodyParser.json(),(req,res)=>{
    try{
        products.addProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add product'
        })
    }
})
export{
    productRouter
}


