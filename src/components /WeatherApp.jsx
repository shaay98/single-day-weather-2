import { useEffect } from "react";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({});
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    
    useEffect(() => {
        async function getData() {        
        
        
        try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=New Orleans`);

        const data = await res.json();
        setWeatherData(data);
         console.log(data);
            } catch (error) {
            console.error(error);
        }
        } getData();
        },[API_KEY]);
   
        if (!weatherData.location){
        return <p>Loading..</p>
   
        } else {

     return (
        <div>
         <h2>Weather in {weatherData.location.name}, {weatherData.location.region}</h2>
         <p>
         <strong>Temperature:</strong> 
         {weatherData.current.temp_f}
         </p>
         </div>
);
}
}
