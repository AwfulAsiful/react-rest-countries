import React, { useEffect, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'
const Countires = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
    },[])
    return (
        <div>
            <h1>Hello From Countries:{countries.length}</h1>
            <div className="country-container">
                {
                    countries.map(country=><Country key={country.capital}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countires;