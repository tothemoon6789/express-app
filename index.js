// 1 con fig express app with hello wolrd
const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use('/css',express.static(__dirname +  '/node_modules/bootstrap/dist/css'))
app.use(express.static(__dirname + '/public'))
app.get('/',(req,res) => {
    res.render('homepage') 
})
app.get('/about',(req,res) => {
    res.render('about') 
})
app.get('/contact',(req,res) => {
    res.render('contact')
})
app.listen(3000)