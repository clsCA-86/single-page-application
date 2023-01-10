import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <section id="home">
      <div id="home-div">
        <img
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          alt="pizza"
        />
      </div>
      <Link to="/pizza" id="order-pizza">
        Order!
      </Link>
    </section>
  );
}
