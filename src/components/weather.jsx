import React, { Component } from 'react';
import './weather.css';
import request from 'browser-request';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: null,
      wind: null,
      when: null,
    };
  }

  componentDidMount() {
    
    request('https://api.weather.gov/gridpoints/TOP/39,84/forecast', (error, response, body) => {
      const data = JSON.parse(body);
          this.setState({
            temp: data.properties.periods[0].temperature,
            wind: data.properties.periods[0].windSpeed,
            when: data.properties.periods[0].name,
          });
    });
  }
     

  render() {
    const { temp, wind, when } = this.state;
    return (
      <div className='weather-container'>

        <div className='weather-header'>
        <h3><a href="https://api.weather.gov/gridpoints/TOP/39,84/forecast">Cincinnati Weather Report</a></h3>
        </div>

        <div className='weather-data'>
        
        <div className='weather-info'><p>When: {when}</p></div >
        <div className='weather-info'><p>Temperature: {temp} degrees</p></div>
        <div className='weather-info'><p>Wind Speeds: {wind}</p></div>
        
        </div>
      </div>
    );
  }
}

export default Weather;

