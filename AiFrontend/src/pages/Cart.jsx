import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';

const Cart = () => {

  const products = useSelector(state => state.cart.value);

  return (
    <div>

      {
        products.length > 0 ?
          <>
            <h1 className="text-3xl text-center">List Of Items in Cart </h1>
            <div className="grid grid-cols-4 gap-2 p-12">
              {
                products.map((p, idx) => <Card key={idx} product={p} />)
              }
            </div>
          </>
          : <h1 className="text-3xl">Cart is Empty</h1>
      }

    </div>
  )
}

export default Cart