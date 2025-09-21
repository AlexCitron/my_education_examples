import Main from "./components/Main.jsx";
import WeatherCard from "./components/weatherCardContainer.jsx";
import {useEffect, useState} from "react";

let API_KEY = null

export default function WeatherPage() {
    const [apiKey, setApiKey] = useState("");
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [coords, setCoords] = useState(null);

    useEffect(() => {
        if(!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return
        }
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
           setCoords({latitude, longitude});
        }, (error) => {
            console.error("Geolocation error", error.message);
            setError("Failed to get geolocation");
        });
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if(!city.trim() && !coords) {
            setWeatherData(null);
            setError(null);
            return;
        }

        async function getWeatherData() {
            setLoading(true);
            try {

                const query = city.trim() ? city : `${coords.latitude},${coords.longitude}`;

                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`
                );
                const data = await response.json();
                if(data.error){
                    setError(data.error.message);
                } else {
                    setError(null);
                    setWeatherData(data);
                }
            } catch (error) {
                setWeatherData(null);
            } finally {
                setLoading(false)
            }
        }
        getWeatherData();
        return () => {
            controller.abort();
        }
    }, [city, coords, API_KEY])

    function renderError(){
        return <p className='mb-4 text-red-500 font-semibold text-2xl text-center'>{error}</p>;
    }

    function renderLoading(){
        return <p className='text-2xl font-bold m-2 text-[#e2e8f0]'>Loading...</p>;
    }

    function renderWeather(){
        return (
            <WeatherCard>
                <div className='p-4 rounded-xl border-1 border-white/40 text-center'>
                    <div className='weather-details flex flex-col items-center'>
                        <h2 className='mb-4 text-white font-semibold text-2xl'>{weatherData?.location?.name}, {weatherData?.location?.country}</h2>
                        <img src={weatherData?.current?.condition?.icon} alt="icon" className='w-15 h15' />
                        <p className='text-4xl text-[#63b3ed] m-2 font-bold'>{weatherData?.current?.temp_c} °C</p>
                        <p className='text-xl font-bold m-2 text-[#e2e8f0]'>{weatherData?.current?.condition?.text}</p>
                        <div className='text-sm mt-2 text-[#cbd5e0]'>
                            <p>Humidity: {weatherData?.current?.humidity}%</p>
                            <p>Wind: {(weatherData?.current?.wind_kph / 3.6).toFixed(1)} m/s</p>
                            <p>Wind direction: {weatherData?.current?.wind_dir}</p>
                        </div>
                    </div>
                </div>
            </WeatherCard>
        )
    }

    return (
    <div className='flex flex-col items-center h-screen justify-center
    bg-gradient-to-b from-black from-[-50%] to-[#003288]  bg-no-repeat'>
        <p className='text-2xl text-yellow-50'>Weather forecast from
            <a className='hover:cursor-pointer text-yellow-200' href='https://www.weatherapi.com/'> https://www.weatherapi.com/</a> please use your API Key to get forecast</p>
        <Main>
            <div className='max-w-100 w-90% p-5 rounded-xl
            bg-gradient-to-br from-[#849abe] from-[-20%] to-[#214176]
            shadow-2xl backdrop-blur-xs border-1 border-white/1'>
                <h1 className='font-bold text-3xl text-[#edf2f7] mb-4'>Weather Widget</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        let [key] = e.target;
                        API_KEY = key.value;
                        setApiKey("")
                    }}
                    className='flex flex-col items-center'>
                    <input
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className='w-full px-2.5 py-3 border-1 border-white/40 rounded-md
                  text-[#f0f7ed] outline-none mb-5 bg-white/10
                  focus:border-[#63b3ed]
                  ' type='text' placeholder='Enter API Key'/>
                    <button
                        className='p-2 mb-2 bg-blue-200 rounded-xl hover:cursor-pointer hover:bg-blue-400 transition duration-300'
                        type='submit'
                        >Submit API
                    </button>
                </form>
                <div className={'search-container'}>
                  <input className='w-full px-2.5 py-3 border-1 border-white/40 rounded-md
                  text-[#f0f7ed] outline-none mb-5 bg-white/10
                  focus:border-[#63b3ed]
                  ' type='text' placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} />
                </div>
                  {loading && renderLoading()}
                  {error && !loading && renderError()}
                  {!error && !loading && weatherData && renderWeather()}
            </div>
        </Main>
    </div>
    )
}
