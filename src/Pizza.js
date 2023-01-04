import React, { useState, useEffect } from "react";

const defaultValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  instructions: "",
};

const Pizza = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.value]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues.name);
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <div className="App">
      {console.log(formValues)}
      <h1>Order Pizza!</h1>
      <label htmlFor="pizza">
        <h3>Pizza Size:</h3>
      </label>
      <form onSubmit={(event) => handleSubmit(event)}>
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
          topping1:
          <input
            id="topping1"
            type="checkbox"
            value={formValues.value}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="topping2">
          topping2:
          <input
            id="topping2"
            type="checkbox"
            value={formValues.value}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="topping3">
          topping3:
          <input
            id="topping3"
            type="checkbox"
            value={formValues.value}
            onChange={(e) => handleChange(e)}
          />
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
          onChange={(e) => handleChange(e)}
        />
        <button onSubmit={() => handleSubmit()}>Click!</button>
      </form>
    </div>
  );
};

export default Pizza;
