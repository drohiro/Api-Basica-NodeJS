const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();

//Config Mongoose
//String de conexao Mongoose Atlas => mongodb+srv://user_admin:<password>@clusterapi-ubtkj.mongodb.net/test?retryWrites=true&w=majority
const url = 'mongodb+srv://user_admin:35789355rfs@clusterapi-ubtkj.mongodb.net/test?retryWrites=true&w=majority'
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(url, options)
mongoose.set('userCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexao com o Banco de dados' + err)
})

mongoose.connection.on('disconnected', () => {
    console.log('Erro na conexao com o Banco de dados')
})

mongoose.connection.on('connected', (con) => {
    console.log('SECESSO na conexao com o Banco' + con)
})

//Config Body-Parser

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const indexRoute = require('./Routes/index')
const usersRoute = require('./Routes/users')

app.use('/', indexRoute)
app.use('/users', usersRoute)

app.listen(3200);
module.exports = app;