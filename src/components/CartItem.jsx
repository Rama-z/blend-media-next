import profileAction from "@/redux/actions/profile";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartItem({ image, name, price, count, id }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.profile.cart);
  return (
    <>
      <section className="flex p-5 border-2 border-gray">
        <div>
          <Image alt="favorite" src={image} width={50} height={50} />
        </div>
        <div>
          <div>{name}</div>
          <div className="flex flex-row">
            <div>Harga: Rp </div>
            <div>{price * count}</div>
          </div>
          <div className="flex flex-row">
            <div>Quantity: </div>
            <div>{count}</div>
          </div>
          <div className="flex gap-2 text-xs text-gray-500">
            <div
              className="cursor-pointer"
              onClick={() => {
                const filtered = cart.filter((item) => item.id !== id);
                dispatch(profileAction.addToCart(filtered));
              }}
            >
              Hapus
            </div>
            <div className="cursor-pointer">Pindahkan ke Favorit</div>
          </div>
        </div>
      </section>
    </>
  );
}
