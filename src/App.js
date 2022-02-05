import { useState } from 'react';
import './App.css';

function App() {
  const apikey="1fb977a3ae08f04b9c5064562daf7d8f";
  const [wetherData, setWhetherData]=useState([{}]);
  const [city, setCity] = useState("");

  const getWhether = (event) => {
    if(event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`).then((response) => response.json())
      .then((data) => {
        setWhetherData(data);
        setCity('');
      })
    }
  }
  return (
    <div className="search-box">
      <input 
      className='search-bar'
      placeholder='Enter City'
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWhether}
      />

      {typeof wetherData.main === 'undefined' ? (
      <div className='enter-city'>
        <p>Welcome to Weather App Enter a City</p>
        </div>
        ) : (
          <div className="weather-box">
          <p className="city">{wetherData.name}</p>
          <p className='temp'>{Math.round(wetherData.main.temp)}℉</p>
          <p className='weather'>{wetherData.weather[0].main}</p>
          </div>
         ) }
         {wetherData.cod === '404' ? (
 <p className='error'>City Not Found</p>
 ) : (
 <></>
 )}
    </div>
  )}
 

export default App;
