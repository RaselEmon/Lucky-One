import React from "react";
import CartItem from "./CartItem";
import CustomAlert from "./CustomAlert";

const Cart = ({
  selectedLaptops,
  onChooseOne,
  onChooseAgain,
  onDelete,
  customAlert,
}) => {
  return (
    <>
      <CustomAlert customAlert={customAlert} />
      <div className="border border-success rounded p-2">
        <h2>Selected Laptops</h2>
        <hr />

        <div
          className="selected-products-container d-flex flex-column gap-2"
          style={cartStyles.selectedProductsContainer}
        >
          {selectedLaptops.map((laptop) => (
            <CartItem key={laptop.id} laptop={laptop} onDelete={onDelete} />
          ))}
        </div>

        <hr />
        <button onClick={onChooseOne} className="btn btn-success my-2 me-2">
          Choose one for me
        </button>
        <button onClick={onChooseAgain} className="btn btn-warning">
          Reset All
        </button>
      </div>
    </>
  );
};

const cartStyles = {
  selectedProductsContainer: {},
};

export default Cart;
