import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

// type ProfileProps = {
//   name?: string;
//   age: number;
//   status: "coder" | "developer" | "printer";
//   children?: React.ReactNode;
// };

interface ProfileProps {
  id: number;
  image: string;
}

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();

    // fetch("https://fakestoreapi.com/products/1")
    //   .then((res) => res.json())
    //   .then((response) => console.log(response));

    //   const qwe = async () => {
    //       const rt = await fetch("https://fakestoreapi.com/products/1");
    //       const fg = await rt.json();
    //       console.log(fg);
    //   }
    //   qwe();

    //   axios("https://fakestoreapi.com/products/1").then((res) => console.log(res))
  }, []);

  const handleAdd = (product:any) => {
    dispatch(add(product));
  };

  return (
    <div>
      {products.map((cv: any) => (
        <div key={cv.id}>
          <img src={cv.image} alt="" />
          <h4>{cv.title}</h4>
          <h5>{cv.price}</h5>
          <button onClick={() => handleAdd(cv)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
