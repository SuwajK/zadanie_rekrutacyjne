import React from 'react'
import './summary.css'

const Summary = ({subTotalCost, shippingCost, nextStep}) => {

  const handleProceedButtonClick = () => {
    nextStep()
  }

  return (
    <>
      <p className="shopping-cart__summary__shipping">
        <span className="shopping-cart__summary__shipping__label">SHIPPING</span>
        <span className="shopping-cart__summary__shipping__value">${shippingCost.toFixed(2)}</span>
      </p>
      <p className="shopping-cart__summary__costs">
        <span className="shopping-cart__summary__costs__header">CART TOTALS</span>
        <span className="shopping-cart__summary__costs__subtotal__label">Subtotal</span>
        <span className="shopping-cart__summary__costs__subtotal__value">${subTotalCost.toFixed(2)}</span>
        <span className="shopping-cart__summary__costs__grand-total__label">Grand Total</span>
        <span className="shopping-cart__summary__costs__grand-total__value">
            ${(subTotalCost + shippingCost).toFixed(2)}
          </span>
        <button className="shopping-cart__summary__costs__button btn-action btn-action--bold"
                onClick={handleProceedButtonClick}>
          Proceed to checkout
        </button>
      </p>
    </>

  )
}

Summary.defaultProps = {
  subTotalCost: 0,
  shippingCost: 0,
  nextStep: () => console.log('Please set nextStep function.'),
}

export default Summary