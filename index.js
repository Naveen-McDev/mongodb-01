const express = require("express");
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;


const PORT = process.env.PORT || 6000;
const MONGO_URL = "mongodb+srv://Admin:123@cluster0.rok7n.mongodb.net/?retryWrites=true&w=majority"


app = express();
app.use(express.json());


//Find all the information about each products
// app.get("/products", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find().toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });


//Find the product price which are between 400 to 800
// app.get("/btw-400-800", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({product_price:{$gt:400,$lt:800}}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });


//Find the product price which are not between 400 to 600
// app.get("/not_btw-400-800", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({product_price:{$not : {$gt:400,$lt:800}}}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

//List the four product which are grater than 500 in price 
// app.get("/grt-500", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({product_price:{$gte:500}}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

//Find the product with a row id of 10
// app.get("/id", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({id:"10"}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

//Find all products which contain the value of soft in product material 
// app.get("/id", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({product_material: "Soft"}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });


//Find only the product name and product material
// app.get("/id", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({}, {product_price:1, product_material:1}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

//Find the product name and product material of each products
// app.get("/id", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({}, {product_price:1, product_material:1}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

//Find products which contain product color indigo  and product price 492.00
// app.get("/id", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").find({product_color: "indigo", product_price: "492"}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

// Delete the products which product price value are same
// app.get("/id", async (req,res) => {

//     try {
//         //Open the connection
//         let connection = await mongoClient.connect(MONGO_URL);

//         //select the Database
//         let db = connection.db("test");

//         //select the collection
//         //do operation
//         let products = await db.collection("mongo-data").deleteOne({product_price: 500}).toArray()
//         //close the connection
//         await connection.close();
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message: "Something Went Wrong"})
//     }
// });

app.listen(PORT, () => {
    console.log(`Web server is running at port : ${PORT}`);
})

