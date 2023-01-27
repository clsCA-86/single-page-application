import React from "react";

export default function PizzaForm(props) {
  const { size, values, change, submit, errors, disabled } = props;

  const changeHandler = (evt) => {
    const { name, checked, value, type } = evt.target;
    const wantValue = type === "checkbox" ? checked : value;
    change(name, wantValue);
  };

  // focus on why that test gave me this error message

  const SubmitHandler = (evt) => {
    console.log("firedsubmit");
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={SubmitHandler} id="pizza-form">
      {errors.name && <h5>{errors.name}</h5>}
      <label>Enter Name:</label>
      <input
        onChange={changeHandler}
        id="name-input"
        type="text"
        name="name"
        value={values.name}
        placeholder="Full Name"
      />
      <label>Email:</label>
      <input
        onChange={changeHandler}
        id="email"
        type="text"
        name="email"
        value={values.email}
        placeholder="Enter your Email"
      />
      <br />
      <h2>Choose Pizza Size:</h2>
      <select value={size} id="size-dropdown" onChange={changeHandler}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extra-large">Extra Large</option>
      </select>
      <br />
      <h2>Add Toppings:</h2>
      <br />
      <section id="toppings">
        <label>Pepperoni</label>
        <input
          id="pepperoni"
          name="pepperoni"
          type="checkbox"
          onChange={changeHandler}
          checked={values.pepperoni}
        />
        <label>Veggies</label>
        <input
          id="veggies"
          name="veggies"
          type="checkbox"
          onChange={changeHandler}
          checked={values.veggies}
        />
        <label>Meat Lovers</label>
        <input
          id="meat"
          name="meat"
          type="checkbox"
          onChange={changeHandler}
          checked={values.meat}
        />
        <label>Pineapple</label>
        <input
          id="pineapple"
          name="pineapple"
          type="checkbox"
          onChange={changeHandler}
          checked={values.pineapple}
        />
        <label>Glutten Free:</label>
        <input
          id="gf"
          name="gf"
          type="checkbox"
          onChange={changeHandler}
          checked={values.gf}
        />
        <br />
        <label>Special Instructions </label>
        <input
          id="special-text"
          name="special"
          onChange={changeHandler}
          checked={values.special}
          placeholder="Please enter your special request"
        />
        <br />
        <button id="order-button" type="submit" disabled={disabled}>
          <span>Submit! </span>
        </button>
      </section>
    </form>
  );
}
