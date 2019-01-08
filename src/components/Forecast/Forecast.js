import React from 'react';
import './Forecast.css';
import Weather from '../Weather/Weather.js';

class Forecast extends React.Component {
  render() {
    return(
      <div className="Forecast">
        {
          this.props.days.map((day) => {
            return <Weather key={day.id} weather={day} />
          })
        }
      </div>
    );
  }
}

export default Forecast;
