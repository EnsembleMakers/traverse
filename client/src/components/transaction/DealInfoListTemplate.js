import React, { Component, Fragment } from 'react';
import './DealInfoListTemplate.css';

const DealInfoListTemplate = ({ form, productCode, totalOrder, productPrice, totalPrice, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        Deal Info.
        </div>
      <section className="form-wrapper">
        {form}
      </section>
    </main>
  )
}

// <section className="form-wrapper">
//   Total Order {totalOrder}
// </section>
// <section className="form-wrapper">
//   Product Price {productPrice}
// </section>
// <section className="form-wrapper">
//   Total Price {totalPrice}
// </section>
export default DealInfoListTemplate;