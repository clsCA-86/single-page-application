import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, useHistory } from "react-router-dom";
import Pizza from "./Pizza";
import Home from "./Home";
import FormOrderSent from "./FormOrderSent";
import axios from "axios";
import * as yup from "yup";
import schema from "./formSchema";

const initialValues = {
  name: "",
  size: "",
  salami: false,
  bellpepper: false,
  sausage: false,
  ham: false,
  gf: false,
  special: "",
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

  const validation = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  const changeForm = (name, value) => {
    validation(name, value);
    setOrderValues({ ...orderValues, [name]: value });
  };

  const submitForm = () => {
    const newOrder = {
      name: orderValues.name,
      size: orderValues.size,
      salami: orderValues.salami,
      bellpepper: orderValues.bellpepper,
      sausage: orderValues.sausage,
      ham: orderValues.ham,
      cheese:
        !orderValues.salami &&
        !orderValues.bellpepper &&
        !orderValues.sausage &&
        !orderValues.ham
          ? true
          : false,
      special: orderValues.special,
      gf: orderValues.gf,
    };

    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([...orders, res.data]);
      })
      .catch((err) => console.error(err));

    history.push("/orders");
    setOrderValues(initialValues);
  };

  useEffect(() => {
    schema.isValid(orderValues).then((valid) => setDisabled(!valid));
  }, [orderValues]);

  return (
    <>
      <section id="header">
        <h1>BloomTech Eats</h1>
        <Link to="/" name="headerHome">
          Home
        </Link>
        <Link to="/pizza" id="header-pizza">
          Order Online!
        </Link>
      </section>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/pizza">
        <form
          values={orderValues}
          change={changeForm}
          submit={submitForm}
          errors={errors}
          disabled={disabled}
        />
      </Route>

      <Route path="/order">
        <FormOrderSent order={orders} />
      </Route>
    </>
  );
};

export default App;
