import { useRef } from "react";
import LogoImg from "../assets/logo.jpg";
import CartModal from "./CartModal";

export default function Header() {
  const modal = useRef();
  function handleModalOpen() {
    modal.current.open();
  }

  const modalActions = <button className="button">Close</button>;
  return (
    <>
      <CartModal ref={modal} title="Food Cart" actions={modalActions} />
      <div id="main-header">
        <div id="title">
          <img src={LogoImg} alt="logo" />
        </div>
        <button onClick={handleModalOpen} className="text-button">
          Cart
        </button>
      </div>
    </>
  );
}
