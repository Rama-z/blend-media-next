import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductBox from "@/components/Product";
import productAction from "@/redux/actions/product";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(productAction.getProductThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section
          className={auth.userData.roles === "admin" ? "pt-10 px-10" : "hidden"}
        >
          <button
            className="border-black border-2 rounded-xl p-2"
            onClick={() => {
              router.push("/product/create");
            }}
          >
            Create Product
          </button>
        </section>
        <section className="flex justify-start flex-wrap gap-2 ml-8 my-10">
          {product.product.map((item, idx) => {
            return (
              <>
                <ProductBox
                  key={idx}
                  image={item.product_image_url}
                  info={item.product_info}
                  price={item.product_price}
                  name={item.product_name}
                  id={item.uniq_id}
                  brand={item.brand}
                />
              </>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
