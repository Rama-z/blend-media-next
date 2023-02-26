import profileAction from "@/redux/actions/profile";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteItem({ image, name, id }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const favoriteItem = useSelector((state) => state.profile.favorite);
  return (
    <>
      <section className="flex p-5 border-2 border-gray">
        <div>
          <Image alt="favorite" src={image} width={50} height={50} />
        </div>
        <div>
          <div>{name}</div>
          <div className="flex gap-2 text-xs text-gray-500">
            <div
              className="cursor-pointer"
              onClick={() => {
                const filtered = favoriteItem.filter((item) => item.id !== id);
                dispatch(profileAction.addToFavorite(filtered));
              }}
            >
              Hapus
            </div>
            <div className="cursor-pointer">Pindahkan ke Keranjang</div>
          </div>
        </div>
      </section>
    </>
  );
}
