const apiKey = "a05ae24218bbb46681d63f0e20bea77f";

let WeatherAPI = {
  search(city, country) {
    return fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city},${country}&cnt=5&units=imperial&APPID=${apiKey}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      console.log(jsonResponse);
      if(jsonResponse.list) {
        console.log('has list key');
        return jsonResponse.list.map((item) => {
          return {
            id: item.dt,
            temp: item.main.temp,
            city: item.name,
            country: item.country,
            humidity: item.main.humidity,
            condition: item.weather[0].description,
            icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            error: ""
          };
        });
      }
      else{console.log('no list key')}
    });
  }
}

export default WeatherAPI;
