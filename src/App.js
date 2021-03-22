import React from 'react'
import './index.css';

const api = {
  key: '084f59539f57c3e7d459d0a0ab0ba02b',
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {

  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     let day = days[d.getDay()];
     let month = months[d.getMonth()];
     let date = d.getDate();
     let year = d.getFullYear();
  
     return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app cold">
    <main>
    <div className="search-box">
      <input type="text" name="" className="search-bar" placeholder='Search'/>
      </div>

      <div className="location-box">
        <div className="location">Ivano-Frankivsk, UA</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>

      <div className="weather-box">
        <div className="temp">1&#176;c</div>
        <div className="weather">Cloud</div>
      </div>
    </main>
    </div>
  );
}

export default App;
