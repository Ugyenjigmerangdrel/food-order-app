import { useContext, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { FoodCartContext } from "../context/food-cart-context";
import Input from "./UI/Input";
import { postMealOrder } from "../utilities/order";

const FormModal = forwardRef(function Modal({}, ref) {
  const dialog = useRef();
  const { items } = useContext(FoodCartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {
    dialog.current.close();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    const order = {
      items: items,
      customer: customerData,
    };

    postMealOrder(order);
  }

  return createPortal(
    <dialog ref={dialog} className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: ${totalPrice}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <button className="button">Submit</button>
        </p>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default FormModal;
