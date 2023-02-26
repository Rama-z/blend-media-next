import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import profileAction from "@/redux/actions/profile";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);
  const profile = useSelector((state) => state.profile.profile);
  const [body, setBody] = useState({
    email: profile.email,
    gender: profile.gender,
    address: profile.address,
    image: profile.image,
    status: profile.status,
    username: profile.username,
    roles: profile.roles,
  });
  const changeHandler = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const editHandler = () => {
    const success = () => {
      router.push("/profile");
    };
    dispatch(profileAction.editProfileThunk(body, token, success));
  };
  useEffect(() => {
    dispatch(profileAction.getProfileThunk(token));
  }, [dispatch, token]);
  return (
    <>
      <Header />
      <main className="font-RedHat w-screen flex">
        <Sidebar />
        <section className="flex flex-col gap-5 border-2 border-gray p-10 w-5/6 m-20">
          <div className="text-lg font-bold">UBAH INFORMASI AKUN</div>
          <div>
            <div className="text-sm font-bold pb-2">USERNAME</div>
            <input
              className="w-full border-2 border-gray p-2"
              placeholder="Input your name"
              type="text"
              name="username"
              value={body.username}
              onChange={changeHandler}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">EMAIL</div>
            <input
              className="w-full border-2 border-gray p-2 cursor-not-allowed"
              type="text"
              name="email"
              disabled
              value={profile.email}
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">ADDRESS</div>
            <input
              className="w-full border-2 border-gray p-2"
              type="text"
              name="address"
              value={body.address}
              onChange={changeHandler}
              placeholder="Input your address"
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">ROLES</div>
            <input
              className="w-full border-2 border-gray p-2 cursor-not-allowed"
              type="text"
              name="address"
              disabled
              value={profile.roles}
              placeholder="Input your address"
            />
          </div>
          <div>
            <div className="text-sm font-bold pb-2">STATUS</div>
            <input
              className="w-full border-2 border-gray p-2 cursor-not-allowed"
              type="text"
              name="address"
              disabled
              value={profile.status}
              placeholder="Input your address"
            />
          </div>
          <div className="pb-10">
            <div className="text-sm font-bold pb-2">GENDER</div>
            <div className="flex gap-5 ">
              <input
                defaultChecked={profile.gender === "male"}
                type="radio"
                id="male"
                value="male"
                name="gender"
                onClick={() => setBody({ ...body, gender: "male" })}
              />
              <label htmlFor="female">Male</label>
              <input
                defaultChecked={profile.gender === "female"}
                type="radio"
                id="female"
                value="female"
                name="gender"
                onClick={() => setBody({ ...body, gender: "female" })}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button className="text-white bg-black p-3" onClick={editHandler}>
            SAVE CHANGE
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
