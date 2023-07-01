import React from 'react';

export default function MainWeather(props) {
    return (
        <div className="town-and-date">
            <div className="temperature">
                <h1>{props.weather[3]}C</h1>
            </div>
            <div className="town-and-day">
                <div className="town-weatherlogo">
                    <h3>{props.weather[5]}</h3>
                    <img className="logo" src = {props.weather[0]} alt={props.weather[2]}/>
                </div>
                    <p>{props.weather[4]}</p>
            </div>
        </div>
    )
}