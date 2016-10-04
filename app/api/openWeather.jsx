var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "//api.openweathermap.org/data/2.5/weather?&appid=0ab8d03754b1660957c9fd164d2bb5cf&units=imperial";
module.exports = {
    getTemp: function(location) {
        var encodedURl = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedURl}`;
        
        return axios.get(requestUrl).then(function(res){    
                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            
            }, function(res){
                throw new  Error(res.data.message);
            });
        

    }
};  