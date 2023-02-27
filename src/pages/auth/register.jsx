import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import authAction from "@/redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [body, setBody] = useState({});
  const changeHandler = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const registerHandler = () => {
    const success = () => {
      router.push("/auth/login");
    };
    const failed = (err) => {
      toast.success(`Login Failed ${err}, Try again`);
    };
    dispatch(authAction.registerThunk(body, success, failed));
  };
  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex justify-center">
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-1/2 m-20">
          <div className="text-lg font-bold">REGISTER</div>
          <div>
            <div className="text-sm font-bold pb-2">USERNAME</div>
            <input
              className="w-full border-2 border-gray p-2"
              placeholder="Input your name"
              type="text"
              name="username"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">EMAIL</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              name="email"
              placeholder="Input your email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">ADDRESS</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              name="address"
              onChange={changeHandler}
              placeholder="Input your address"
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">GENDER</div>
            <div className="flex gap-5 ">
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                onClick={() => setBody({ ...body, gender: "male" })}
              />
              <label htmlFor="female">Male</label>
              <input
                type="radio"
                id="female"
                value="female"
                name="gender"
                onClick={() => setBody({ ...body, gender: "female" })}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="relative">
            <div className="text-sm font-bold pb-2">PASSWORD</div>
            <input
              className="w-full border-2 border-gray p-2"
              type={visibility ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Input your password"
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
          <div className="relative">
            <div className="text-sm font-bold pb-2">CONFIRM PASSWORD</div>
            <input
              className="w-full border-2 border-gray p-2"
              type={confirm ? "text" : "password"}
              name="confirm"
              placeholder="Confirm your password"
              onChange={changeHandler}
            />
            {confirm ? (
              <VisibilityIcon
                onClick={() => {
                  setConfirm(!confirm);
                }}
                className="absolute top-10 right-4 cursor-pointer"
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => {
                  setConfirm(!confirm);
                }}
                className="absolute top-10 right-4 cursor-pointer"
              />
            )}
          </div>
          <button className="text-white bg-black p-3" onClick={registerHandler}>
            CREATE NEW ACCOUNT
          </button>
          <div className="flex justify-center gap-2">
            <div>Already have an account?</div>
            <div
              className="font-bold cursor-pointer"
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              Login Here
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
