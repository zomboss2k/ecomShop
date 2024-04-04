"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  carProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuatity: React.FC<SetQtyProps> = ({
  carProduct,
  cartCounter,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUATITY:</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtyDecrease} className={btnStyles}>
          -
        </button>
        <div>{carProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuatity;
