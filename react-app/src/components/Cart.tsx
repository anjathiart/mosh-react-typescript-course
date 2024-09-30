import React from 'react'


interface CartProps {
    cartItems: string[];
    handleClearCart: () => void;
}

const Cart = ({ cartItems, onClear }: CartProps) => {
    
  return (
    <>
        <h1>Cart</h1>   
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button className="btn btn-secondary" onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart