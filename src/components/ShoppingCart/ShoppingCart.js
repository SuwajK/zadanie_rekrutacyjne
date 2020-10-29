import React from "react";
import CartItem from "./../CartItem";
import './../../styles.css'


const ShoppingCart = ({items, setItems, subTotalCost, setSubTotalCost, shippingCost, nextStep}) => {

  const deleteItem = (itemName) => {
    setItems(prevState => prevState.filter(
      item => item.itemName === itemName ? 0 : 1)
    )
  }

  const updateItemQuantity = (itemName, quantity) => {
    setItems(prevState => {
        return prevState.map(item => item.itemName === itemName
          ? {...item, quantity: quantity}
          : item
        )
      })
  }

  const calculatePrices = () => {
    if (items) {
      let cost = 0;
      items.forEach(item => {
        cost += item.quantity * item.price
      })
      setSubTotalCost(cost)
    }
  }

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart__header">Shopping Cart</h1>
      <button className="shopping-cart__header_button btn-action" onClick={nextStep}>Proceed to checkout</button>
      <main className="shopping-cart__main">
        <table className="shopping-cart__main__table">
          <thead className="shopping-cart__main__table__header">
          <tr className="shopping-cart__main__table__header__row">
            <th></th>
            <th></th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
          </tr>
          </thead>
          <tbody className="shopping-cart__main__table__body">
          {items && items.map((itemProps, index) =>
            <CartItem {...itemProps} key={index} deleteItem={deleteItem} updateQuantity={updateItemQuantity}
                      calculatePrices={calculatePrices}/>
          )}
          <tr className="shopping-cart__main__table__last-row">
            <td>
              <button className="btn-action btn-action--bold" onClick={calculatePrices}>Update Shopping Cart</button>
            </td>
          </tr>
          </tbody>
        </table>
      </main>
      <aside className="shopping-cart__summary">
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
                  onClick={nextStep}>
            Proceed to checkout
          </button>
        </p>
      </aside>
    </div>
  );
}

export default ShoppingCart;
