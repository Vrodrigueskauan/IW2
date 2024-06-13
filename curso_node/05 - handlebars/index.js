const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//confih
    //engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //conexão BD
    const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
})

//Rotas
app.get('/cadastro',function(req,res){
    res.render('formulario')
})

app.post('/add', function (req,res){
    res.send('formulario recebido')
})




app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})