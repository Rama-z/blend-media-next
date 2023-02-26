import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAction from "@/redux/actions/auth";
import productAction from "@/redux/actions/product";

export default function Edit() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);
  const product = useSelector((state) => state.product.detail);
  const [warn, setWarn] = useState(false);
  const [body, setBody] = useState({
    uniq_id: product.uniq_id,
    product_name: product.product_name,
    product_price: product.product_price,
    brand: product.brand,
    product_image_url: product.product_image_url,
    product_info: product.product_info,
    real_pdp_url: product.real_pdp_url,
  });
  const checkForString = (text) => {
    const regex = /https:\/\/cdn\.eraspace\.com/;
    return regex.test(text);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setWarn(false);
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const editHandler = () => {
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
    dispatch(
      productAction.editProductThunk(body, token, body.uniq_id, success)
    );
  };

  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex justify-center">
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-1/2 m-20">
          <div className="text-lg font-bold">EDIT PRODUCT</div>
          <div>
            <div className="text-sm font-bold pb-2">ID</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              value={body.uniq_id}
              name="uniq_id"
              disabled
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">PRODUCT NAME</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              name="product_name"
              value={body.product_name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">PRICE</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              value={body.product_price}
              name="product_price"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">BRAND</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              value={body.brand}
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
              value={body.product_image_url}
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
              value={body.product_info}
              name="product_info"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">REAL PDP URL</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              value={body.real_pdp_url}
              name="real_pdp_url"
              onChange={changeHandler}
            />
          </div>
          <button className="text-white bg-black p-3" onClick={editHandler}>
            CONFIRM
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
