import Image from "next/image";
import React, { useState } from "react";
import Sample from "@/assets/image/homepage.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "@/redux/actions/profile";

export default function ProductBox({
  image,
  price,
  name,
  info,
  brand,
  id,
  favorites,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(favorites);
  const favoriteItem = useSelector((state) => state.profile.favorite);
  const body = [...favoriteItem];

  return (
    <>
      <main className="border-2 border-gray">
        <section
          onClick={() => {
            router.push(`/product/detail/${id}`);
          }}
          className="flex flex-col justify-center text-center font-RedHat p-16 gap-2 cursor-pointer"
        >
          <div className="w-40 flex justify-center">
            <Image
              alt="product"
              className=""
              src={image}
              width={100}
              height={100}
            />
          </div>
          <div>{name}</div>
          <div>Rp {price}</div>
        </section>
        <section className="flex justify-end p-3">
          <FavoriteIcon
            onClick={() => {
              setFavorite(favorite ? false : true);
              if (!favorite) {
                const filtered = favoriteItem.filter((item) => item.id === id);
                if (filtered[0]?.id === id) return;
                body.push({
                  image,
                  price,
                  name,
                  info,
                  brand,
                  id,
                  favorites: true,
                });
                dispatch(profileAction.addToFavorite(body));
                return;
              }
              const filtered = favoriteItem.filter((item) => item.id !== id);
              dispatch(profileAction.addToFavorite(filtered));
            }}
            className={`${
              favorite ? "text-red-500" : "text-gray-400"
            } cursor-pointer`}
          />
        </section>
      </main>
    </>
  );
}
