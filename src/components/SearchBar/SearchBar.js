import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
    }
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCityChange(event) {
    this.setState({city: event.target.value})
  }

  handleCountryChange(event) {
    this.setState({country: event.target.value})
  }

  handleSearch(event) {
    this.props.searchWeatherAPI(this.state.city, this.state.country);
    event.preventDefault();
  }

  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBarFields">
          <input onChange={this.handleCityChange} placeholder="City" />
          <input onChange={this.handleCountryChange} placeholder="Country Code (eg. US)" />
        </div>
        <div className="Button">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;
