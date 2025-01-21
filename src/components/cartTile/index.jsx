import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const CartTile = ({ singleCartItem }) => {
  const { removeFromCart, handleAddToCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="grid grid-cols-3 items-start gap-4">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              alt="cartImage"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="">
            <h3 className="text-base font-bold text-gray-200">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => removeFromCart(singleCartItem, true)}
              className="text-sm px-4 bg-black text-white font-extrabold mt-3"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-200">
            ${singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 text-gray-200 font-bold text-[16px]">Quantity: {singleCartItem.quantity}</p>
          <div className=" flex px-4 mt-3">
            <button
              onClick={() => removeFromCart(singleCartItem, false)}
              className="disabled:opacity-65 border border-black"
              disabled={singleCartItem?.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="border border-black ml-1"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-200"></hr>
    </>
  );
};

export default CartTile;
