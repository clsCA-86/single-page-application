import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, useHistory } from "react-router-dom";
import PizzaForm from "./Form";
import HomePage from "./HomePage";
import OrderSent from "./OrderSent";
import axios from "axios";
import * as yup from "yup";
import schema from "./formSchema/schema";

const initialValues = {
  name: "",
  size: "",
  pepperoni: false,
  veggies: false,
  meat: false,
  pineapple: false,
  gf: false,
  special: "",
  email: "",
};

const initialErrors = {
  name: "",
};

const App = () => {
  const [orders, setOrders] = useState([]);
  const [orderValues, setOrderValues] = useState(initialValues);

  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  const validatation = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  console.log(errors);
  const changeForm = (name, value) => {
    validatation(name, value);
    setOrderValues({ ...orderValues, [name]: value });
  };

  const submitForm = () => {
    console.log("fired");
    const newOrder = {
      name: orderValues.name,
      size: orderValues.size,
      pepperoni: orderValues.pepperoni,
      veggie: orderValues.veggies,
      meat: orderValues.meat,
      pineapple: orderValues.pineapple,
      cheese:
        !orderValues.pepperoni &&
        !orderValues.veggies &&
        !orderValues.meat &&
        !orderValues.pineapple
          ? true
          : false,
      special: orderValues.special,
      gf: orderValues.gf,
    };

    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res);
        setOrders([...orders, res.data]);
        history.push("/orders");
      })
      .catch((err) => console.error(err));

    setOrderValues(initialValues);
  };

  useEffect(() => {
    schema.isValid(orderValues).then((valid) => setDisabled(!valid));
  }, [orderValues]);

  return (
    <>
      <section id="header">
        <h1>BloomTech Eatery!</h1>
        <Link to="/" name="header-Home">
          Home
        </Link>
        <Link to="/pizza">Order Online!</Link>
      </section>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/pizza">
        <PizzaForm
          values={orderValues}
          change={changeForm}
          submit={submitForm}
          errors={errors}
          disabled={disabled}
        />
      </Route>

      <Route path="/orders">
        <OrderSent order={orders} />
      </Route>
    </>
  );
};
export default App;
