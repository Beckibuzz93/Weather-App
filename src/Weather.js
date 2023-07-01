import {useState, useEffect} from 'react';
import MainWeather from './MainWeather';
import TodaysDate from './TodaysDate';
import NoData from './NoData'
import './style.css';


export default function GetWeather(props){
    const [weather, setWeather] = useState([]);

    useEffect(() =>
    {
        const apiKey = process.env.REACT_APP_METEOSOURCE_API_KEY;
        let place = props.city;
        let url = `https://www.meteosource.com/api/v1/free/point?place_id=${place}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`;

        fetch(url)
        .then ((response) => response.json())
        .then((weather) => setWeather(weather))
    }, [props.city])

    const todaysDate = TodaysDate();
    const currentWeather = weather.current;
    let city = props.city;

    //importing all the icons from the icons file
    function importAll(r) {
        let icons = [];
        r.keys().forEach((item) => { icons[item.replace('./', '')] = r(item); });
        return icons;
    }
    const icon = importAll(require.context('./data/icons', false, /\.(png|jpe?g|svg)$/));


    if(currentWeather)
    {
        const iconNum = currentWeather.icon_num;
        const iconType = currentWeather.icon;
        const summary = currentWeather.summary;
        const temp = currentWeather.temperature;

        //Changing the icon based on the icon number from the API
        const iconData = icon[`${iconNum}.png`]; 

        const weather = [iconData, iconType, summary, temp, todaysDate, city]

        return(
            <div>
                <MainWeather weather={weather} />
            </div>
        )
    }
    else if (!currentWeather)
    {
        const error = 'Sorry we cannot find the data for that city.'

        return(
            <NoData error={error} />
        )
    }
}

