import React from 'react';
import Forecast from './components/Forecast/Forecast.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import logo from './logo.svg';
import './App.css';
import WeatherAPI from './util/WeatherAPI.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
    this.searchWeatherAPI = this.searchWeatherAPI.bind(this);
  }

  searchWeatherAPI(city, country) {
    console.log(`Searching for weather in ${city} ${country}`);
    WeatherAPI.search(city, country).then(days => {
      this.setState({days: days});
      console.log(this.state.days);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <SearchBar searchWeatherAPI={this.searchWeatherAPI}/>
        <Forecast days={this.state.days}/>
      </div>
    );
  }
}

export default App;
