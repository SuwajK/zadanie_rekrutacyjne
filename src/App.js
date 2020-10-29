import './App.css'
import './styles.css'

import editImg from '../static/images/edit-img.png'
import headphones from '../static/images/headphones.png'
import xImg from '../static/images/x-img.png'

function App() {
  return (
    <div className="shipping-cart">
      <h1 className="shipping-cart__header">Shopping Cart</h1>
      <button className="shipping-cart__header_button btn-action">Proceed to checkout</button>
      <main className="shipping-cart__main">
        <table className="shipping-cart__main__table">
          <thead className="shipping-cart__main__table__header">
          <tr className="shipping-cart__main__table__header__row">
            <th></th>
            <th></th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
          </tr>
          </thead>
          <tbody className="shipping-cart__main__table__body">
          <tr className="shipping-cart__main__table__body__item-row">
            <td>
              <img src={xImg} alt="Delete item"/>
            </td>
            <td>
              <img src={headphones} alt="Headphones"/>
            </td>
            <td>Headphones</td>
            <td>$11.90</td>
            <td>
              <button className="btn-edit">-</button>
              <input type="text" className="shipping-cart__main__table__body__item-row__input"/>
              <button className="btn-edit">+</button>
              <img src={editImg} alt="Edit"
                   className="shipping-cart__main__table__body__item-row__image"/>
            </td>
          </tr>
          <tr className="shipping-cart__main__table__last-row">
            <td>
              <button className="btn-action btn-action--bold">Update Shopping Cart</button>
            </td>
          </tr>
          </tbody>
        </table>
      </main>
      <aside className="shipping-cart__summary">
        <p className="shipping-cart__summary__shipping">
          <span className="shipping-cart__summary__shipping__label">SHIPPING</span>
          <span className="shipping-cart__summary__shipping__value">$23.80</span>
        </p>
        <p className="shipping-cart__summary__costs">
          <span className="shipping-cart__summary__costs__header">CART TOTALS</span>
          <span className="shipping-cart__summary__costs__subtotal__label">Subtotal</span>
          <span className="shipping-cart__summary__costs__subtotal__value">$23.80</span>
          <span className="shipping-cart__summary__costs__grand-total__label">Grand Total</span>
          <span className="shipping-cart__summary__costs__grand-total__value">$23.80</span>
          <button className="shipping-cart__summary__costs__button btn-action btn-action--bold">Proceed to checkout
          </button>
        </p>
      </aside>

    </div>
  );
}

export default App;
