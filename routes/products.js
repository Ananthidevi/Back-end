const express = require("express");
const router = express.Router();

let products = [
{id: 1, title:"watch", price:4500},
{id: 2, title:"phone", price:45500},
{id: 3, title:"Tv", price:45000},
]


//GET Method => http://localhost:8081/products
// router.get("/products",(req,res)=>{
//     res.send("<h1>successfully fetched<h1>");
// })

router.get("/products",(req,res)=>{
    res.send(products);
})

router.post("/products",(req,res)=>{
    res.send("<h1>successfully<h1>");
})

router.put("/products/id",(req,res)=>{
    res.send("products Updated");
})

router.delete("/products/id",(req,res)=>{
    res.send("products Deleted");
})

module.exports = router;