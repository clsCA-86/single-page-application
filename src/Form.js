import React from "react";

export default function PizzaForm(props) {
  const { values, change, submit, errors, disabled } = props;

  const onChange = (evt) => {
    const { name, checked, value, type } = evt.target;
    const wantValue = type === "checkbox" ? checked : value;
    change(name, wantValue);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <label>
        Your Name: &nbsp;
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={onChange}
          value={values.name}
          placeholder="Pepper Pots"
        />
      </label>
      {errors.name && <h5>{errors.name}</h5>}

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
    </form>
  );
}
