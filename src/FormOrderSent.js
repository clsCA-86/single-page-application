import React from "react";
import FormOrderCard from "./FormOrderCard";

export default function OrderSent(props) {
  const { order } = props;
  return (
    <section id="confirmation-page">
      {!!order.length && <h2>Thank you! Pizza is on it's way!</h2>}
      {!order.length ? (
        <h2>Loading...</h2>
      ) : (
        order.map((order) => <FormOrderCard order={order} key={order.id} />)
      )}
    </section>
  );
}
