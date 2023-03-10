import axios from "axios";
import React, { useState } from "react";
import Header from "../Header/Header";
import { useEffect } from "react";
import "./AllBeersPage.css";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((allBeers) => {
        setBeers(allBeers.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1 className="allBeersTitle">BEER LIST</h1>
      {beers.map((individualBeer) => {
        return (
          <div className="beerCard">
            <Link
              className="singleBeerLink"
              key={individualBeer._id}
              to={`/beers/${individualBeer._id}`}
            >
              <img
                className="beersListImgs"
                src={individualBeer.image_url}
                alt=""
              />
            </Link>
            <div className="beerInfo">
              <Link
                className="singleBeerLink"
                key={individualBeer._id}
                to={`/beers/${individualBeer._id}`}
              >
                <h2 className="singleBeerName">{individualBeer.name}</h2>
              </Link>

              <h3 className="beerTagline">{individualBeer.tagline}</h3>
              <p>Created by:{individualBeer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
