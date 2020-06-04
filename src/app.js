const path = require('path')
const express = require('express')
const app = express()
const forecast = require('./util/forecast.js')
const request = require('request')
const hbs = require('hbs')
const geocode = require('./util/geocode.js')
const dirpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partials = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partials)
app.use(express.static(dirpath))
app.get('/',(req,res)=>{
    res.render('index',{
            
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{

    })
})

app.get('/help',(req,res)=>{
    res.render('help',{

    })
})

app.get('/weather',(req,res)=>{
    geocode(req.query.address,(error,{latitude,longitude,placename}={})=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(latitude)
            console.log(longitude)
            console.log(placename)
            forecast(latitude,longitude,(error,{weather}={})=>{
                if(error){
                    console.log(error)
                }
                else{
                    res.send({
                        weather : weather
                    })
                }
            })
            
        }
    })
    //586 561 677
 })



app.listen(3000,()=>{
    console.log('server is up')
})