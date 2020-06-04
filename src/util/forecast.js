const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=80e8996e9a0a90f4a7cab6207906e104&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            console.log(error)
        }else{
            callback(undefined,{
                weather : body.current.weather_descriptions[0] + '. Current temperature of the city is '+ body.current.temperature+ ' degrees celcius with rain chances of '+ body.current.precip + ' %'
            })
        }
    })
}

module.exports = forecast