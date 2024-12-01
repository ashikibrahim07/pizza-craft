import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between border-b-2 border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:flex-row sm:px-6">
      <Link to="/" className="mb-2 font-medium capitalize tracking-widest">
        PizzaCraft
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
};

export default Header;
