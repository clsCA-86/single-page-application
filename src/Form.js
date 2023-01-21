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
      <br />
      <label>
        Email:
        <input
          onChange={(evt) => {
            console.log(evt.target.value);
          }}
          id="name-input"
          type="text"
          name="email"
          value={values.email}
          placeholder="Enter your Email"
        />
      </label>
      <br />
      <select value={size} id="size-dropdown" onChange={onChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extra-large">Extra Large</option>
      </select>

      <label>Toppings:</label>
      <section id="toppings">
        <input
          name="pepperoni"
          type="checkbox"
          onChange={onChange}
          checked={values.pepperoni}
        />
        <label> Pepperoni </label>
        <br />
        <input
          name="veggie"
          type="checkbox"
          onChange={onChange}
          checked={values.veggie}
        />
        <label>Veggies</label>
        <br />
        <input
          name="meat"
          type="checkbox"
          onChange={onChange}
          checked={values.meat}
        />
        <label>Meat Lovers</label>
        <input
          name="pineapple"
          type="checkbox"
          onChange={onChange}
          checked={values.pineapple}
        />
        <label>Pineapple</label>
        <input
          type="checkbox"
          name="gf"
          onChange={onChange}
          checked={values.pineapple}
        />
        <label>Glutten Free:</label>
        <br />
        <input
          type="button"
          name="gf"
          id="gf"
          onChange={onChange}
          checked={values.gf}
        />

        <label>Special Instructions: </label>
        <input
          name="special"
          id="special-text"
          onChange={onChange}
          value={values.spacial}
          placeholder="Please enter your special request"
        />
        <label>Submit!</label>
        <button
          type="input-name"
          id="order-button"
          value="submit"
          button="true"
          disabled={disabled}
        ></button>
      </section>
    </form>
  );
}
