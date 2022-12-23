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
        <Route exact path="/pizza" component={Pizza} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <h2>Build your own Pizza</h2>
    </div>
  );
};

export default App;
