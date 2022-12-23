import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Pizza from "./Pizza";
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";
import "./index.css";
import "./App";

const defaultValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  instructions: "",
};

const schema = yup.object().shape({
  user: yup.string().required("name must be atleast 2 characters"),
});

const App = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  return (
    <div className="App">
      <h1>BloomTech Eats</h1>

      <nav>
        <ul className="navbar">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pizza">Pizza</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Pizza} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <h2>Build your own Pizza</h2>
      <label htmlFor="pizza">
        <h3>Choice of Size:</h3>
      </label>
      <form id="pizza-form">
        <label htmlFor="pizza-form">
          <select name="order-pizza">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="extra-large">extra large</option>
          </select>
        </label>
        <h2>Toppings</h2>

        <label htmlFor="topping1">
          topping1: <input id="topping1" type="checkbox" />
        </label>
        <label htmlFor="topping2">
          topping2: <input id="topping2" type="checkbox" />
        </label>
        <label htmlFor="topping3">
          topping3: <input id="topping3" type="checkbox" />
        </label>

        <h2>Choice of Substitute</h2>
        <p>Choose one Topping per pizza order</p>
        {/*Form input goes Here */}

        <label htmlFor="fname">First Name: </label>
        <input
          type="name-input"
          id="fname"
          name="fname"
          placeholder="Enter First Name"
          onChange={(e) => setFormValues(e.target.value)}
        />
        <Link to="/pizza" id="order-pizza">
          <button>Click!</button>
        </Link>
      </form>
    </div>
  );
};

export default App;
