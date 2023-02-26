import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import authAction from "@/redux/actions/auth";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [body, setBody] = useState({});

  const loginHandler = () => {
    const success = () => {
      router.push("/");
    };
    dispatch(authAction.loginThunk(body, success));
  };

  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex justify-center">
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-1/2 m-20">
          <div className="text-lg font-bold">LOGIN</div>
          <div>
            <div className="text-sm font-bold pb-2">EMAIL</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              placeholder="Input your email"
              onChange={(e) => {
                e.preventDefault();
                setBody({
                  ...body,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="relative">
            <div className="text-sm font-bold pb-2">PASSWORD</div>
            <input
              className="w-full border-2 border-gray p-2"
              type={visibility ? "text" : "password"}
              placeholder="Input your password"
              onChange={(e) => {
                e.preventDefault();
                setBody({
                  ...body,
                  password: e.target.value,
                });
              }}
            />
            {visibility ? (
              <VisibilityIcon
                onClick={() => {
                  setVisibility(!visibility);
                }}
                className="absolute top-10 right-4 cursor-pointer"
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => {
                  setVisibility(!visibility);
                }}
                className="absolute top-10 right-4 cursor-pointer"
              />
            )}
          </div>
          <button className="text-white bg-black p-3" onClick={loginHandler}>
            LOGIN
          </button>
          <div className="flex justify-center gap-2">
            <div>Dont have an account?</div>
            <div
              className="font-bold cursor-pointer"
              onClick={() => {
                router.push("/auth/register");
              }}
            >
              Register Here
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
