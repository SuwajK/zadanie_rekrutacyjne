import React, {useEffect, useState} from "react";
import './App.css'
import './styles.css'
import headphones from './static/images/headphones.png'
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";



function App() {

  const [items, setItems] = useState([
    {itemName: 'Headphones', itemImage: headphones, price: 11.90, quantity: 1}
  ]);
  const [subTotalCost, setSubTotalCost] = useState(0)
  const [shippingCost, setShippingCost] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
      subTotalCost > 100
        ? setShippingCost(0)
        : setShippingCost(23.80)
    }
    , [subTotalCost])

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
          subTotalCost={subTotalCost}
          setSubTotalCost={setSubTotalCost}
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
          nextStep={checkout}
        />
      }
    </>
  );
}

export default App;
