import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar-bg bg-violet-700 text-violet-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto  flex justify-between items-center">
        <div className="left">
          <span className="text-lg font-semibold">
            tech<span className="text-orange-500">Alpha</span>
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <Link className="nav-link hover:text-orange-500 duration-300" to="/">
            Home
          </Link>
          <Link
            className="nav-link hover:text-orange-500 duration-300"
            to="/products"
          >
            Products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="icon-counter absolute text-xs -top-3 -right-3 bg-orange-600 w-4 h-4 rounded-full flex justify-center items-center">
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
