import React from 'react';
import './Country.css';
const Country = (props) => {
    const{name,flag,capital,region}=props.country;
    return (
        <div className='country'>
            <h4>Country: {name}</h4>
            <img src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;