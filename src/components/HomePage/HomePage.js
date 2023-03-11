import React from "react";
import { Link } from "react-router-dom";
import BeersImg from "../../assets/beers.png";
import RandomBeerImg from "../../assets/random-beer.png";
import NewBeerImg from "../../assets/new-beer.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="homePageCard">
        <img className="homePageImg" src={BeersImg} alt="" />
        <Link to="/beers" className="homePageLink">
          All Beers
        </Link>
        <p>
          Pellentesque tincidunt, diam a interdum consectetur, mauris leo
          egestas augue, non commodo purus mi id sem. Nam tincidunt pretium
          condimentum. Suspendisse vel turpis quis dui porta varius. Sed dictum
          varius purus sit amet vulputate. Aliquam ut rhoncus velit. Nam mattis
          vitae ligula in posuere. Etiam maximus malesuada metus, vel dictum
          magna sollicitudin et. Etiam sollicitudin hendrerit ex, a porttitor
          libero vestibulum id.
        </p>
      </div>
      <div className="homePageCard">
        <img className="homePageImg" src={RandomBeerImg} alt="" />
        <Link to="/random-beer" className="homePageLink">
          Random Beers
        </Link>
        <p>
          Pellentesque tincidunt, diam a interdum consectetur, mauris leo
          egestas augue, non commodo purus mi id sem. Nam tincidunt pretium
          condimentum. Suspendisse vel turpis quis dui porta varius. Sed dictum
          varius purus sit amet vulputate. Aliquam ut rhoncus velit. Nam mattis
          vitae ligula in posuere. Etiam maximus malesuada metus, vel dictum
          magna sollicitudin et. Etiam sollicitudin hendrerit ex, a porttitor
          libero vestibulum id.
        </p>
      </div>
      <div className="homePageCard">
        <img className="homePageImg" src={NewBeerImg} alt="" />
        <Link to="/new" className="homePageLink">
          Add Beers
        </Link>
        <p>
          Pellentesque tincidunt, diam a interdum consectetur, mauris leo
          egestas augue, non commodo purus mi id sem. Nam tincidunt pretium
          condimentum. Suspendisse vel turpis quis dui porta varius. Sed dictum
          varius purus sit amet vulputate. Aliquam ut rhoncus velit. Nam mattis
          vitae ligula in posuere. Etiam maximus malesuada metus, vel dictum
          magna sollicitudin et. Etiam sollicitudin hendrerit ex, a porttitor
          libero vestibulum id.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
