import React from 'react'
import xImg from "../../static/images/x-img.png";
import editImg from "../../static/images/edit-img.png";

const CartItem = ({itemName, itemImage, price, quantity, updateQuantity, deleteItem, calculatePrices}) => {

  const increaseCount = () => {
    updateQuantity(itemName, quantity + 1)
  }

  const decreaseCount = () => {
    /* Prevent from decreasing under 1 */
    if (quantity > 1) {
      updateQuantity(itemName, quantity - 1)
    }
  }

  const handleInput = (e) => {
    const value = e.target.value
    if (!isNaN(value) && value > 0) {
      updateQuantity(itemName, value)
    }
  }

  const handleDelete = () => {
    deleteItem(itemName)
  }

  const handleEditButtonClick = () => {
    calculatePrices()
  }

  return (
    <tr className="shopping-cart__main__table__body__item-row">
      <td>
        <button className="btn-invisible" onClick={handleDelete}>
          <img src={xImg} alt="Delete item"/>
        </button>
      </td>
      <td>
        <img src={itemImage} alt="Headphones"/>
      </td>
      <td>{itemName}</td>
      <td>${price.toFixed(2)}</td>
      <td>
        <button className="btn-edit" onClick={decreaseCount}>-</button>
        <input
          type="text"
          className="shopping-cart__main__table__body__item-row__input"
          value={quantity}
          onChange={handleInput}
        />
        <button className="btn-edit" onClick={increaseCount}>+</button>
        <button className="btn-invisible" onClick={handleEditButtonClick}>
          <img src={editImg}
               alt="Edit"
               className="shopping-cart__main__table__body__item-row__image"/>
        </button>
      </td>
    </tr>
  )
}

CartItem.defaultProps = {
  itemName: '',
  itemImage: '',
  price: 0,
  quantity: 0,
  updateQuantity: () => console.log('Please set updateQuantity function.'),
  deleteItem: () => console.log('Please set deleteItem function.'),
  calculatePrices: () => console.log('Please set calculatePrices function.'),
}

export default CartItem