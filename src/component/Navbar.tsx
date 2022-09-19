import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state:any) => state.cart);
  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span>REdux Store</span>&nbsp;&nbsp;&nbsp;
      <div>
        <Link className="navlink" to="/">
          Home
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="navlink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
