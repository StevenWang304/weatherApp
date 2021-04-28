import React from 'react';

const Weather = props =>(
    <div>
        {
            props.city && props.country && <p className="weather__key">location:
                <span className="weather__value"> {props.city}, {props.country}</span>
                </p>
        }
        {
            props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> {props.temperature}</span>
            </p>
        }
        {
            props.humidity && <p className="weather__key">Humidity:
                <span className="weather__value"> {props.humidity}</span>
                </p>
        }
        {
            props.descriiption && <p className="weather__key">Conditions:
                <span className="weather__value"> {props.descriiption}</span>
                </p>
        }
        {
            props.error && <p className="weather__key">{props.error}</p>
        }
    </div>
)

export default Weather;