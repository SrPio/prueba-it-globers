import React from "react";
import Cart from "./pufi_cart/Cart";
import Nap from "./pufi_nap/Nap";
import Puff from "./pufi_puff/Puff";
import Rain from "./pufi_rain/Rain";

function Products() {
  return (
    <div>
      <Rain />
      <Puff />
      <Cart />
      <Nap />
    </div>
  );
}

export default Products;
