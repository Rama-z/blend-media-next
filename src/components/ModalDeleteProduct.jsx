import authAction from "@/redux/actions/auth";
import productAction from "@/redux/actions/product";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function ModalDeleteProduct({
  token,
  id,
  modal,
  setModal,
  text,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <div
        className={
          modal
            ? "fixed w-screen h-screen bg-transparent select-none"
            : "hidden"
        }
      >
        <div className="fixed flex flex-col gap-10 border-2 border-black bg-white top-52 left-96 p-24">
          <div>{text}</div>
          <div className="flex justify-around">
            <button
              className="bg-red-600 px-7 py-2 rounded-xl"
              onClick={() => {
                if (text === "Are you sure want to log out?") {
                  const success = () => {
                    router.push("/");
                  };
                  dispatch(authAction.logoutThunk(token, success));
                  return;
                }
                const success = () => {
                  router.push("/product");
                };
                dispatch(productAction.deleteProductThunk(token, id, success));
              }}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 px-7 py-2 rounded-xl"
              onClick={() => {
                setModal(!modal);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
