const express = require('express')
const app = express()
const port = 8100
const mongoose = require('mongoose')
const cors = require('cors')
const connectionString = "mongodb+srv://admin:admin123@appdatabase.2k2xz62.mongodb.net/"
const Produto = require('./model/produto')
app.use(express.json())

app.get("/listar-produtos", async(req, res) =>{
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    }catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/adicionar-produto", async(req, res)=>{
    let{nome, descricao, imagem, valor, categoria} = req.body
    let produto = {
        nome,
        descricao,
        imagem,
        valor,
        categoria
    }
    try{
        await Produto.create(produto)
        return res.status(201).json({message: "Produto cadastrado com sucesso"})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})
mongoose.connect(connectionString, {
    dbName: "ecommerce"
}).then(() =>{
    console.log("Conectado com sucesso")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) =>{
    console.log(error)
})
