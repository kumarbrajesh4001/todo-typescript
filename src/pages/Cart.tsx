import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state: any) => state.cart);
   const dispatch = useDispatch();

  const handleRemove = (productId:any) => {
    dispatch(remove(productId));
    
  }

  return (
    <div>
      <h3>Cart</h3>

      {products.map((product: any) => <div>
        <img src={product.image} alt="" />
        <p>{product.title}</p>

        <button onClick={()=>handleRemove(product.id)}>Remove</button>
      </div>
      
      
      
      )}
    </div>
  );
};

export default Cart;
