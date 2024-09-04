import { useRef, useContext } from "react";
import { FoodCartContext } from "../context/food-cart-context";

import LogoImg from "../assets/logo.jpg";
import CartModal from "./CartModal";

export default function Header() {
  const { items } = useContext(FoodCartContext);
  const modal = useRef();

  function handleModalOpen() {
    modal.current.open();
  }

  const modalActions = (
    <div className="modal-actions">
      <button className="text-button">Close</button>
      {items.length > 0 && <button className="button">Checkout</button>}
    </div>
  );
  return (
    <>
      <CartModal ref={modal} title="Food Cart" actions={modalActions} />
      <div id="main-header">
        <div id="title">
          <img src={LogoImg} alt="logo" />
        </div>
        <button onClick={handleModalOpen} className="text-button">
          Cart({items.length > 0 ? items.length : 0})
        </button>
      </div>
    </>
  );
}
