import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import transactionAction from "@/redux/actions/transaction";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "@/redux/actions/profile";

export default function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.profile.cart);
  const profile = useSelector((state) => state.profile.profile);
  const token = useSelector((state) => state.auth.userData.token);
  let total = 0;
  let temp = [];
  cart.map((item) => {
    temp.push({
      product_id: item.id,
      quantity: item.quantity,
      subtotal: item.quantity * item.price,
    });
    return (total += parseFloat(item.price) * parseFloat(item.quantity));
  });
  console.log(temp);
  const [body, setBody] = useState({
    product_item: temp,
    total,
    address: profile.address,
  });

  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex">
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-4/6 m-20">
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
        </section>
        <section className="w-2/6 py-20 pr-20 flex flex-col gap-4">
          <div>Ringkasan</div>
          <div className="flex justify-between">
            <div>Total Pesanan:</div>
            <div>Rp. {total}</div>
          </div>
          <div className="flex justify-between">
            <div>Address:</div>
            <div>{profile.address}</div>
          </div>
          <button
            className="text-white bg-black flex justify-center p-2"
            onClick={() => {
              const success = () => {
                toast.success(`Transaction Successfully created`);
                router.push("/product");
                dispatch(profileAction.deleteFromCart());
              };
              dispatch(
                transactionAction.createTransactionThunk(body, token, success)
              );
            }}
          >
            Beli
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
