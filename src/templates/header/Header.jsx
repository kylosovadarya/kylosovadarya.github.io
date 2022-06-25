import React from "react";
import classes from "./header.module.scss";
import User from "../../trifles/icons/User";
import Cart from "../../trifles/icons/Cart";
import CartIndicator from "../../trifles/CartIndicator";
import MyInput from "../../components/MyInput";
import Search from "../../trifles/icons/Search";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Freshenescom</h1>
      <form>
        <label>
          <MyInput
            type="text"
            placeholder="Search Products, categories..."
            className={classes.searchInput}
          />
        </label>
        <button className={classes.searchBtn}>
          <Search />
        </button>
      </form>
      <div className={classes.btns}>
        <button>
          <User className={classes.headerIcon} />
        </button>
        <button>
          <CartIndicator />
          <Cart className={classes.headerIcon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
