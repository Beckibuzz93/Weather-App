import {useState} from 'react';
import places from './data/places.json';
import GetWeather from './Weather';
import './style.css';


export default function SidePanel() {
    const [city, setCity] = useState('London');
    const [arrow, setArrow] = useState(false);

    function handleCitySelect(e) 
    {
        setCity(e.target.value); 
    }
    function handleCityMoreCities(e)
    {
        setCity(e.target.textContent);  
    }
    function handleArrow()
    {
        setArrow(current => !current)
    }
    
    return (
        <div className='container-main'>
            <div className="weather">
                <div className="selection-box smaller">                                                                                     
                    <select onClick={handleArrow} onChange={handleCitySelect} name={city} id="places">
                        {places.map((places, index) => (
                        <option key={index} value={places.city} size="10"> {places.city} </option>))}
                    </select>
                    <i className={arrow ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down" }></i>
                </div>
                <GetWeather city={city} />
            </div>
            <div className="side-panel">
                <section className="sec one">
                    <h1> Search for your city here: </h1>
                    <div className="selection-box">                                                                                     
                        <select onClick={handleArrow} onChange={handleCitySelect} name={city} id="places">
                            {places.map((places, index) => (
                            <option key={index} value={places.city} size="10"> {places.city} </option>))}
                        </select>
                        <i className={arrow ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down" }></i>
                    </div>
                    <div onClick={handleCityMoreCities} className="more-cities">
                        <p>Bournemouth</p>
                        <p>Poole</p>
                        <p>Liverpool</p>
                        <p>Northampton</p>
                        <p>York</p>
                        <p>Glasgow</p>
                        <p>Belfast</p>
                        <p>Sittingbourne</p>
                        <p>Falkirk</p>
                        <p>Moffat</p>
                    </div>
                </section>   
            </div>
        </div>
    )
}