import Footer from "@/components/Footer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Sample from "@/assets/image/homepage.jpg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import productAction from "@/redux/actions/product";
import ModalDeleteProduct from "@/components/ModalDeleteProduct";

export default function ProductDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product.detail);
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(productAction.getDetailThunk(router.query.id));
  }, [dispatch, router.query.id]);
  return (
    <>
      <Header />
      <main className="min-h-screen font-RedHat flex">
        <section className="w-2/3 p-10">
          <article className="p-8 flex">
            <section className="w-1/2 h-fit flex justify-center">
              <Image
                alt="Product Detail"
                src={product.product_image_url}
                width={100}
                height={100}
                className="w-60 pt-10"
              />
            </section>
            <section className="w-1/2 flex flex-col border-2 border-gray p-4 gap-2">
              <div className="text-3xl font-bold">{product.product_name}</div>
              <div className="flex gap-20 p-3">
                <div className="flex gap-2 items-center">
                  <div>
                    <CheckCircleIcon className="text-green-500" />
                  </div>
                  <div className="w-4 text-xs font-bold">Available Stock</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <LocalShippingIcon />
                  </div>
                  <div className="w-4 text-xs font-bold">Free Shipping</div>
                </div>
              </div>
              <div className="text-xs font-semibold">
                iPhone 12 Pro Max. Layar Super Retina XDR 6,7 inci yang lebih
                besar.1 Ceramic Shield dengan ketahanan jatuh empat kali lebih
                baik.2 Fotografi pencahayaan rendah yang menakjubkan dengan
                sistem kamera Pro terbaik di iPhone, dan rentang zoom optik 5x.
                Mampu merekam, mengedit, dan memutar video sekelas sinema dengan
                Dolby Vision. Potret mode Malam dan pengalaman AR di level
                berikutnya dengan LiDAR Scanner. Chip A14 Bionic yang andal. Dan
                aksesori MagSafe baru untuk kemudahan pemasangan dan pengisian
                daya nirkabel yang lebih cepat.3 Untuk berjuta kemungkinan
                spektakuler.
              </div>
              <div></div>
            </section>
          </article>
          <article className="p-8 flex flex-col">
            <div className="flex gap-5 border-2 border-gray p-3">
              <div>DESCRIPTION</div>
              <div>SPECIFICATION</div>
            </div>
            <div className="border-2 border-gray p-3 text-xs">
              Loop Sport yang lembut, berongga, dan ringan ini dilengkapi
              pengikat tempel sehingga cepat dan mudah disesuaikan. Anyaman
              nilon berlapis ganda memiliki simpul yang padat pada sisi kulit
              yang memberikan bantalan lembut dan tidak menyebabkan kulit
              terlalu lembap. Di sisi sebaliknya, simpul pengikat terpasang
              dengan kuat untuk ketahanan yang luar biasa. Ukuran Tali Jam
              Reguler 40 mm: untuk pergelangan tangan berukuran 130-190 mm
              Reguler 44 mm: untuk pergelangan tangan berukuran 145–220 mm
              Spesifikasi Teknis Material: nilon anyam Kompatibilitas Anda dapat
              memasangkan tali ini dengan casing Apple Watch Series 5 apa pun
              yang berukuran sama. Juga dapat dipasangkan dengan semua versi
              Apple Watch sebelumnya, termasuk Apple Watch Series 3. Tali 40 mm
              cocok dengan casing 38 mm; tali 44 mm cocok dengan casing 42 mm.
              Model Apple Watch • Apple Watch Series 5 • Apple Watch Series 4 •
              Apple Watch Series 3 • Apple Watch Series 2 • Apple Watch Series 1
              • Apple Watch (generasi ke-1)
            </div>
          </article>
        </section>
        <section className="w-1/3 p-10">
          <article className="border-2 border-gray p-8 mt-8 text-center flex flex-col gap-2">
            <div className="text-2xl font-bold">
              Rp
              {product.product_price * count}
            </div>
            <div className="flex justify-between py-4 px-6">
              <button
                onClick={() => {
                  if (count === 1) return;
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <div className="border-2 border-black px-10 py-1">{count}</div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            {auth.userData.roles === "customer" ? (
              <>
                <button className="bg-black text-white py-3">
                  Tambah Ke Keranjang
                </button>
                <button className="bg-gray-800 text-white py-3">
                  Ambil Di Toko
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-black text-white py-3"
                  onClick={() => {
                    router.push(`/product/edit/${product.uniq_id}`);
                  }}
                >
                  Edit Product
                </button>
                <button
                  className="bg-black text-white py-3"
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  Delete Product
                </button>
              </>
            )}
          </article>
        </section>
        <ModalDeleteProduct
          id={product.uniq_id}
          token={auth.userData.token}
          modal={modal}
          setModal={setModal}
          text={"Are you sure want to delete this product?"}
        />
      </main>
      <Footer />
    </>
  );
}
