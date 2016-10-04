var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeather = require("OpenWeather");

var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading:true
    };
  },
  
  handleSearch: function (location) {
    var that = this;
    OpenWeather.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
    });
    },function(errorMessage){
      that.setState({isLoading:false});
      alert(errorMessage);
    });
  },
  
  render: function () {
    var {isLoading, temp, location} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h1 className="text-center">Rendering</h1>;
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    
    return (
      <div>
        <h3 className="text-center">Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
