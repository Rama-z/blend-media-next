import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const router = useRouter();
  const cart = useSelector((state) => state.profile.cart);
  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex">
        <Sidebar />
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-5/6 m-20">
          <div className="text-lg font-bold">CART</div>
          <div className="flex flex-col gap-3">
            {cart.map((item) => {
              return (
                <>
                  <CartItem
                    image={item.image}
                    price={item.price}
                    count={item.quantity}
                    name={item.name}
                    id={item.id}
                  />
                </>
              );
            })}
          </div>
          <button
            className="flex justify-center bg-black text-white p-3"
            onClick={() => {
              router.push("/checkout");
            }}
          >
            Buy
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
