import React from "react";

export default function PizzaForm(props) {
  const { size, values, change, submit, errors, disabled } = props;

  const onChange = (evt) => {
    const { name, checked, value, type } = evt.target;
    const wantValue = type === "checkbox" ? checked : value;
    change(name, wantValue);
  };

  // focus on why that test gave me this error message

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      {errors.fname && <h5>{errors.fname}</h5>}
      <label>Enter Name:</label>
      <input
        onChange={(evt) => {
          console.log(evt.target.value);
        }}
        id="name-input"
        type="text"
        name="fname"
        value={values.fname}
        placeholder="Full Name"
      />
      <label>Email:</label>
      <input
        onChange={(evt) => {
          console.log(evt.target.value);
        }}
        id="email"
        type="text"
        name="email"
        value={values.email}
        placeholder="Enter your Email"
      />
      <br />
      <h2>Choose Pizza Size:</h2>
      <select value={size} id="size-dropdown" onChange={onChange}>
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
          onChange={onChange}
          checked={values.pepperoni}
        />
        <label>Veggies</label>
        <input
          id="veggies"
          name="veggies"
          type="checkbox"
          onChange={onChange}
          checked={values.veggies}
        />
        <label>Meat Lovers</label>
        <input
          id="meat"
          name="meat"
          type="checkbox"
          onChange={onChange}
          checked={values.meat}
        />
        <label>Pineapple</label>
        <input
          id="pineapple"
          name="pineapple"
          type="checkbox"
          onChange={onChange}
          checked={values.pineapple}
        />
        <label>Glutten Free:</label>
        <input
          id="gf"
          name="gf"
          type="checkbox"
          onChange={onChange}
          checked={values.gf}
        />
        <br />
        <label>Special Instructions </label>
        <input
          id="special-text"
          name="special"
          onChange={onChange}
          checked={values.spacial}
          placeholder="Please enter your special request"
        />
        <br />
        <button id="button" disabled={disabled}>
          <span>Submit! </span>
        </button>
      </section>
    </form>
  );
}
