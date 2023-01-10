import React from "react";

export default function Pizza(props) {
  const { values, change, submit, errors, disabled } = props;

  const changeHandler = (evt) => {
    const { name, checked, value, type } = evt.target;
    const wantValue = type === "checkbox" ? checked : value;
    change(name, wantValue);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={submitHandler}>
      <label>
        Your name&nbsp;
        <input
          type="text"
          id="name-input"
          name="name"
          onChange={changeHandler}
          value={values.name}
          placeholder="Pepper Pots"
        />
      </label>
      {errors.name && <h5>{errors.name}</h5>}

      <select
        id="size-dropdown"
        name="size"
        onChange={changeHandler}
        value={values.size}
      >
        <option name="pick-size">Pick your pizza size</option>
        <option name="choose-your-size">Choose your size</option>
        <option name="small">Small</option>
        <option name="medium">Medium</option>
        <option name="large">Large</option>
        <option name="extra-large">Extra Large</option>
      </select>
      {errors.size && <h5> {errors.size} </h5>}

      <label>
        Toppings
        <section id="toppings">
          <label>
            <input
              name="salami"
              type="checkbox"
              onChange={changeHandler}
              checked={values.salami}
            />
            &nbsp;Salami
          </label>
          <label>
            <input
              name="bellpepper"
              type="checkbox"
              onChange={changeHandler}
              checked={values.bellpepper}
            />
            &nbsp;bellpepper
          </label>
          <label>
            <input
              name="sausage"
              type="checkbox"
              onChange={changeHandler}
              checked={values.sausage}
            />
            &nbsp;Sausage
          </label>
          <label>
            <input
              name="ham"
              type="checkbox"
              onChange={changeHandler}
              checked={values.ham}
            />
            &nbsp;Ham
          </label>
        </section>
      </label>
      <label htmlFor="special-text">Special Instructions</label>
      <input
        name="special"
        id="special-text"
        onChange={changeHandler}
        value={values.special}
      />
      <label>
        {" "}
        GF&nbsp;
        <input
          type="checkbox"
          name="gf"
          onChange={changeHandler}
          checked={values.gf}
        />
      </label>

      <label htmlFor="special-text">Special Instructions</label>
      <input
        name="special"
        id="special-text"
        onChange={changeHandler}
        value={values.special}
      />

      <input
        type="submit"
        id="order-button"
        value="check out"
        disabled={disabled}
      />
    </form>
  );
}
