import { useRef, useContext } from "react";
import { FoodCartContext } from "../context/food-cart-context";

import LogoImg from "../assets/logo.jpg";
import CartModal from "./CartModal";
import FormModal from "./FormModal";
export default function Header() {
  const { items } = useContext(FoodCartContext);
  const modal = useRef();
  const formModal = useRef();

  function handleCheckout() {
    formModal.current.open();
  }

  function handleModalOpen() {
    modal.current.open();
  }

  const modalActions = (
    <div className="modal-actions">
      <button className="text-button">Close</button>
      {items.length > 0 && (
        <button className="button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
  return (
    <>
      <CartModal ref={modal} title="Food Cart" actions={modalActions} />
      <FormModal ref={formModal} />
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
