import React, {useEffect, useState} from "react";
import './App.css'
import './static/styles/index.css'
import './static/styles/common.css'
import headphones from './static/images/headphones.png'
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


function App() {

  const [items, setItems] = useState([
    {itemName: 'Headphones', itemImage: headphones, price: 11.90, quantity: 1}
  ]);
  const [subTotalCost, setSubTotalCost] = useState(11.90)
  const [shippingCost, setShippingCost] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
      subTotalCost > 100
        ? setShippingCost(0)
        : setShippingCost(23.80)
    }
    , [subTotalCost])

  useEffect(() => calculatePrices(),
    /* Calculate price when items amount changes (does not trigger when quantity changes) */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.length]
  )

  const calculatePrices = () => {
    let cost = 0;
    if (items) {
      items.forEach(item => {
        cost += item.quantity * item.price
      })
    }
    setSubTotalCost(cost)
  }

  const checkout = () => {
    setIsFinished(true)
  }

  return (
    <>
      {isFinished
        ? <h1>Your order has been submitted successfully.</h1>
        : <ShoppingCart
          items={items}
          setItems={setItems}
          calculatePrices={calculatePrices}
          subTotalCost={subTotalCost}
          shippingCost={shippingCost}
          nextStep={checkout}
        />
      }
    </>
  );
}

export default App;
