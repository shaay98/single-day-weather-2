import { useEffect } from "react";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({});
    const API_KEY = import.meta.env.VITE_API_KEY;
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=New Orleans`);
                console.log(res)
                const data = await res.json();
                
                console.log(data)
             setWeatherData(data);
             console.log(data)
            } catch (error) {
                console.error(error);
            }
        }
            getData();
    
    }, []);
    if (!weatherData.location){
        return <p>Loading..</p>
    } else {
        return (
     <p> 
     <strong>Temp:</strong>
        {weatherData.location.current.temp}
     </p>
);
}
}
