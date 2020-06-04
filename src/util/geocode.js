const request = require('request')
const geocode = (location,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(location)+'.json?access_token=pk.eyJ1Ijoic2FudXBldGVyIiwiYSI6ImNqN3JqZm5wOTB1cW0zMnFydGNvM2EwM2UifQ.P5xwTcbHwGP-PI6DEb7baw&limit=1'
    request({url:url,json:true},(error,{body}={})=>{
        if(error){
            console.log('Unable to connect')
        }else if(body.features.length === 0){
            console.log('Location not found')
        }
        else{
            callback(undefined,{
                placename : body.features[0].place_name,
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1]
            })
        }
    })
    
}


//geocode('Amritsar')
module.exports = geocode


