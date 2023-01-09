import React from "react";

export default function FormOrderCard(props) {
  const { order } = props;
  return (
    <div className="FormOrderCard">
      <h3>{order.name}</h3>
      <p>
        Pizza size: <strong>{order.size}</strong>
      </p>
      <div className="toppings">
        {!order.cheese && <h4>Toppings:</h4>}
        {order.cheese && <p>Cheese</p>}
        {order.salami && <p>Salami</p>}
        {order.bellpepper && <p>Bellpepper</p>}
        {order.sausage && <p> Sausage</p>}
        {order.ham && <p>ham</p>}
      </div>
      {order.gf && <p>Gluten Free</p>}
      {!!order.special && (
        <p>
          Special Request:
          <br /> {order.special}
        </p>
      )}
    </div>
  );
}
