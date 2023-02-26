import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAction from "@/redux/actions/auth";
import productAction from "@/redux/actions/product";

export default function Create() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const [warn, setWarn] = useState(false);
  const token = useSelector((state) => state.auth.userData.token);
  const changeHandler = (e) => {
    e.preventDefault();
    setWarn(false);
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const checkForString = (text) => {
    const regex = /https:\/\/cdn\.eraspace\.com/;
    return regex.test(text);
  };
  const createHandler = () => {
    if (!checkForString(body.product_image_url)) {
      setWarn(true);
      return;
    }
    const success = () => {
      const cbSuccess = () => {
        router.push(`/product/detail/${body.uniq_id}`);
      };
      dispatch(productAction.getDetailThunk(body.uniq_id, cbSuccess));
    };
    dispatch(productAction.createProductThunk(body, token, success));
  };
  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex justify-center">
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-1/2 m-20">
          <div className="text-lg font-bold">CREATE PRODUCT</div>
          <div>
            <div className="text-sm font-bold pb-2">ID</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product uniq id"
              name="uniq_id"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">PRODUCT NAME</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product name"
              name="product_name"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">PRICE</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product price"
              name="product_price"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">BRAND</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product brand"
              name="brand"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">
              LINK IMAGE *masukkan link dengan domain https://cdn.eraspace.com
            </div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product link image"
              name="product_image_url"
              onChange={changeHandler}
            />
            <div className={warn ? "text-red-500" : "hidden"}>
              Masukkan link yang benar
            </div>
          </div>
          <div>
            <div className="text-sm font-bold pb-2">PRODUCT INFO</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product info"
              name="product_info"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">REAL PDP URL</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input product real pdp url"
              name="real_pdp_url"
              onChange={changeHandler}
            />
          </div>
          <button className="text-white bg-black p-3" onClick={createHandler}>
            CREATE
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
