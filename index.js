
const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
app.set('view engine','ejs')
app.use(ejsLayouts)

// ROUTES

app.get('/', (req,res)=>{
    res.render('home.ejs')
})

// favorite animals 
app.get('/animals', (req,res)=>{
    const faveAnimals = ['sand crab','corny joke dog','benedict the sea cucamber']
    res.render('animal.ejs', {animals: faveAnimals})
})

app.listen (PORT, ()=>{
    console.log("LAYOUTS AND CONTROLLERS"+ PORT)
})