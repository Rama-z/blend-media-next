import FavoriteItem from "@/components/Favorite";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Favorite() {
  const router = useRouter();
  const favoriteItem = useSelector((state) => state.profile.favorite);
  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex">
        <Sidebar />
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-5/6 m-20">
          <div className="text-lg font-bold">FAVORITE</div>
          <div className="flex flex-wrap justify-start gap-3">
            {favoriteItem.map((item) => {
              return (
                <>
                  <FavoriteItem
                    image={item.image}
                    name={item.name}
                    id={item.id}
                  />
                </>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
