// async function getWeather() {
//   const city = document.getElementById('city').value;
//   const result = document.getElementById('result');

//   if (!city) {
//     result.innerText = "Please enter a city name!";
//     return;
//   }

//   const apiKey = "99b0db8a13f1ab7d79fec010632a48d4"; 
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     if (data.cod === 200) {
//       result.innerHTML = `
//         <strong>${data.name}, ${data.sys.country}</strong><br>
//         🌡️ Temperature: ${data.main.temp} °C<br>
//         🌤️ Weather: ${data.weather[0].main}<br>
//         💨 Wind Speed: ${data.wind.speed} m/s
//       `;
//     } else {
//       result.innerText = "City not found!";
//     }
//   } catch (error) {
//     result.innerText = "Error fetching data!";
//   }
// }

// function toggleMode() {
//   const body = document.body;
//   const btn = document.getElementById('toggle-mode');

//   body.classList.toggle('dark-mode');
//   body.classList.toggle('light-mode');

//   if (body.classList.contains('dark-mode')) {
//     btn.innerText = '☀️ Light Mode';
//   } else {
//     btn.innerText = '🌙 Dark Mode';
//   }
// }
// import React, { useState } from 'react';

// export default function WeatherApp() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const apiKey = "595cec6e7044503c2a8c2ee1c30a80a8";

//   const getWeather = async () => {
//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       const data = await res.json();

//       if (data.cod === 200) {
//         setWeather(data);
//         setError('');
//       } else {
//         setWeather(null);
//         setError('City not found!');
//       }
//     } catch (err) {
//       setError('Failed to fetch weather data');
//     }
//   };

//   return (
//     <div className="app" style={{ textAlign: 'center', padding: '20px' }}>
//       <h2>🌤️ Weather App</h2>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={getWeather}>Get Weather</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {weather && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>{weather.name}</h3>
//           <p>🌡️ Temp: {weather.main.temp}°C</p>
//           <p>☁️ Weather: {weather.weather[0].main}</p>
//           <p>💧 Humidity: {weather.main.humidity}%</p>
//         </div>
//       )}
//     </div>
//   );
// }



const apiKey = "595cec6e7044503c2a8c2ee1c30a80a8";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "❗ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerHTML = "❌ City not found!";
        return;
      }
      result.innerHTML = `
        📍 ${data.name} <br>
        🌡️ Temp: ${data.main.temp}°C<br>
        🌥️ Weather: ${data.weather[0].description}<br>
        💧 Humidity: ${data.main.humidity}%
      `;
    })
    .catch(() => {
      result.innerHTML = "⚠️ Error fetching data.";
    });
}

// Dark mode toggle
document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};


