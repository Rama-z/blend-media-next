import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalDeleteProduct from "./ModalDeleteProduct";

export default function Sidebar() {
  const router = useRouter();
  const content = [
    "Informasi Akun",
    "Riwayat Pesanan",
    "Favorite",
    "Cart",
    "Log out",
  ];
  const token = useSelector((state) => state.auth.userData.token);
  const [modal, setModal] = useState(false);
  return (
    <section className="flex flex-col w-1/6 px-8 py-32">
      {content.map((item) => {
        return (
          <>
            <div
              className="py-3 border-b-2 border-gray cursor-pointer"
              onClick={() => {
                if (item === "Informasi Akun") {
                  router.push("/profile");
                }
                if (item === "Riwayat Pesanan") {
                  router.push("/profile/history");
                }
                if (item === "Favorite") {
                  router.push("/profile/favorite");
                }
                if (item === "Cart") {
                  router.push("/profile/cart");
                }
                if (item === "Log out") {
                  setModal(!modal);
                }
              }}
            >
              {item}
            </div>
            <ModalDeleteProduct
              modal={modal}
              setModal={setModal}
              token={token}
              text="Are you sure want to log out?"
            />
          </>
        );
      })}
    </section>
  );
}
