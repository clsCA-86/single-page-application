import React from "react";
import About from "./About";
import Contact from "./Contact";
import Pizza from "./Pizza";
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";
import "./index.css";
import "./App";


const schema = yup.object().shape({
  user: yup
    .sting()
    .required("user is required")
    .min(6, "name must be at least 2 characters"),
    star: yup
    .string()
    .oneOf(
      ["small", "medium", "large", "extra-large"],
      "you must select a star"
      ),
      language: yup.string().oneOf(["1", "2", "3"], "you must choose a language"),
      agree: yup.boolean().oneOf([true], "you must give away all your data"),
    });
    
useEffect(() => {
  schema.isValid(formValues).then((valid) => setDisabled(!valid));
}, [formValues]);

export default App = () => {};
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
