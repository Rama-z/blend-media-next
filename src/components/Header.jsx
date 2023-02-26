import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Header() {
  const router = useRouter();
  const auth = useSelector((state) => state.auth.userData);
  return (
    <>
      <main className="flex flex-row justify-between items-center bg-black px-20 py-5 font-RedHat">
        <section className="flex flex-row gap-10 text-white items-center">
          <div
            className="text-2xl cursor-pointer select-none"
            onClick={() => {
              router.push("/");
            }}
          >
            Blend Media
          </div>
          <div
            onClick={() => {
              router.push("/product");
            }}
            className="cursor-pointer select-none"
          >
            Product
          </div>
          <div></div>
          <div></div>
        </section>
        <section className="flex flex-row gap-10 text-white items-center">
          <div className="cursor-pointer select-none">
            <SearchIcon />
          </div>
          <div
            className="cursor-pointer select-none"
            onClick={() => {
              router.push("/profile/favorite");
            }}
          >
            <FavoriteIcon />
          </div>
          <div
            className="cursor-pointer select-none"
            onClick={() => {
              router.push("/profile/cart");
            }}
          >
            <ShoppingBagIcon />
          </div>
          <div
            onClick={() => {
              if (!auth.token) {
                router.push("/auth/login");
                return;
              }
              router.push("/profile");
            }}
            className="cursor-pointer select-none"
          >
            <PersonIcon />
          </div>
        </section>
      </main>
    </>
  );
}
