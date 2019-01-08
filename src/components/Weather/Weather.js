import React from 'react';
import ReactDOM from 'react-dom';
import './Weather.css';

class Weather extends React.Component {
  render() {
    return (
      <div className="Weather">
        <div className="Weather-information">
          <img src={this.props.weather.icon} alt=''/>
          <p><b>temperature(F)</b></p>
          <p>{this.props.weather.temp}</p>
          <p>{this.props.weather.condition}</p>
          <p><b>humidity</b></p>
          <p>{this.props.weather.humidity}</p>
        </div>
      </div>
    )
  }
}

export default Weather;
