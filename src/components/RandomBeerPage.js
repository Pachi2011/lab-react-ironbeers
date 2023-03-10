import React from "react";
import Header from "./Header/Header";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function RandomBeerPage() {
  const { random } = useParams();

  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${random}`)
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      });
  }, [random]);

  const renderDetails = () => {
    return (
      <div>
        <Header />

        <div className="BeerDetailsCard">
          <img src={randomBeer.image_url} alt="" className="beer-image" />

          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {randomBeer === null ? "loading beer..." : renderDetails()}
    </>
  );
}

export default RandomBeerPage;
