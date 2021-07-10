import React from "react";
import Weather from "./weather";

const Detail = ({ all }) => {
  return (
    <div class="container">
        <div class="info-side">
          <div class="today-info-container">
       <div class="today-info">

      
      <h2>{all.name}</h2>
    
      <p>
       
        <b>Capital:</b> {all.capital} <br />
        
      
        <b>Population:</b> {all.population}
      </p>
     
    
      <h3>Languages</h3>
      <ul>
        {all.languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
        
        
       
      <div>
        <img class="week-list"
          src={all.flag}
          alt="Flag of the country"
          width="150"
          height="100"
        />
      </div>
      </div> 
      </div> 
      
      </div>
    
       
        <Weather capital={all.capital} />
        
    
    </div>
  );
};

export default Detail;
