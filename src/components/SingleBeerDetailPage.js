import React from "react";
import Header from "./Header/Header";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function SingleBeerDetailPage() {
  const { id } = useParams();
  const [beerToDisplay, setBeerToDisplay] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data);
        setBeerToDisplay(response.data);
      });
  }, [id]);

  const renderDetails = () => {
    return (
      <div>
        <Header />

        <div className="BeerDetailsCard">
          <img src={beerToDisplay.image_url} alt="" className="beer-image" />

          <h1>{beerToDisplay.name}</h1>
          <p>{beerToDisplay.tagline}</p>
          <p>{beerToDisplay.first_brewed}</p>
          <p>{beerToDisplay.attenuation_level}</p>
          <p>{beerToDisplay.description}</p>
          <p>{beerToDisplay.contributed_by}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {beerToDisplay === null ? "loading beer..." : renderDetails()}
    </>
  );
}

export default SingleBeerDetailPage;
