const apiKey = "a05ae24218bbb46681d63f0e20bea77f";

let WeatherAPI = {
  search(city, country) {
    return fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${apiKey}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      console.log(jsonResponse);
      if(jsonResponse.days) {
        console.log('has days key');
        return jsonResponse.days.map((day) => {
          return {
            temp: day.main.temp,
            city: day.name,
            country: day.country,
            humidity: day.main.humidity,
            condition: day.weather[0].description,
            error: ""
          };
        });
      }
      else{console.log('no days key')}
    });
  }
}

export default WeatherAPI;
