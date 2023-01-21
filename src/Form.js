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
      <label>
        Your Name:
        <br />
        <input
          onChange={(evt) => {
            console.log(evt.target.value);
          }}
          id="name-input"
          type="text"
          name="fname"
          value={values.fname}
          placeholder="Pepper Pots"
        />
      </label>
      {errors.name && <h5>{errors.name}</h5>}
      <br />
      <select value={size} id="size-dropdown" onChange={onChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extra-large">Extra Large</option>
      </select>

      <label>Toppings:</label>
      <section id="toppings">
        <label>
          <input
            name="pepperoni"
            type="checkbox"
            onChange={onChange}
            checked={values.pepperoni}
          />
          Pepperoni:
        </label>
        <label>
          <input
            name="veggie"
            type="checkbox"
            onChange={onChange}
            checked={values.veggie}
          />
          Veggie Massacre
        </label>
        <label>
          <input
            name="meat"
            type="checkbox"
            onChange={onChange}
            checked={values.meat}
          />
          Meat Extravaganza
        </label>
        <label>
          <input
            name="pineapple"
            type="checkbox"
            onChange={onChange}
            checked={values.pineapple}
          />
          Pineapple:
        </label>
        <label>
          <input
            type="checkbox"
            name="gf"
            onChange={onChange}
            checked={values.gf}
          />
          Glutten Free:
        </label>
        <br />
        <label>Special Instructions: </label>
        <input
          name="special"
          id="special-text"
          onChange={onChange}
          value={values.special}
        />

        <input
          type="submit"
          id="order-button"
          value="check out"
          disabled={disabled}
        />
      </section>
      <button></button>
    </form>
  );
}
