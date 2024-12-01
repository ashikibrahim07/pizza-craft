import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utilis/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 shadow-lg sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <p className="hover:text-yellow-300">
        <Link to="/cart">Open cart &rarr;</Link>
      </p>
    </div>
  );
}

export default CartOverview;
