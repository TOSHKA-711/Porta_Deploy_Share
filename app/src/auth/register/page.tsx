"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { useAlert } from "@/app/src/items/hooks/useAlert";

const RegisterPage = () => {
  const router = useRouter();
  const { showSuccess, showError } = useAlert();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    // gender: "",

  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackToLogin = () => {
    router.push("/");
  };

  // handle register API call
  const handleRegister = async () => {
     console.log(payload);
     
    }
 

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="register w-full min-h-screen bg-[#0B0E1A] flex items-center justify-center relative py-6 max-sm:px-4 max-sm:min-h-[110vh] max-sm:p-8"
       
      >
        <Image
          src="/logo1.svg"
          alt="logo"
          width={70}
          height={100}
          className="absolute top-4 left-5"
        />
        <div
          className="card bg-[#1E232A]  flex flex-col items-start pr-6 pl-8 py-8 gap-5 min-w-[450px] rounded-lg max-sm:min-w-[320px] mt-16"
          style={{ boxShadow: "0px 3.48px 3.48px 0px #00000040" }}
        >
          <span className="flex flex-col items-start gap-1">
            <h2 className="text-[#B7A7FD] font-semibold">Register</h2>
            <p className="text-[13px]">Create your account below</p>
          </span>

          <div className="inputs grid grid-cols-2 items-center gap-4 w-full">
                      {/* Full Name */}
          <div className="input w-full grid gri items-start gap-2">
            <p className="font-semibold text-[15px]">Full Name</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="name"
                value={payload.name}
                type="text"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your full name"
              />
            </span>
          </div>

          {/* Email */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Email</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="email"
                value={payload.email}
                type="email"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your email"
              />
              <CiMail className="text-[20px] text-zinc-500" />
            </span>
          </div>

          {/* Password */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Password</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="password"
                value={payload.password}
                type="password"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your password"
              />
              <IoKeyOutline className="text-[20px] text-zinc-500" />
            </span>
          </div>
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Password confirmation</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="password_confirmation"
                value={payload.password_confirmation}
                type="password"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="password_confirmation"
              />
              <IoKeyOutline className="text-[20px] text-zinc-500" />
            </span>
          </div>

          {/* gender*/}
          {/* <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Gender</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="gender"
                value={payload.gender}
                type="text"
                className="border-none outline-none px-3 py-2 w-full "
                placeholder="Enter your Gender"
              />
            </span>
          </div> */}
         

          </div>
      
    <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[#B7A7FD] text-white self-end w-full p-2 rounded-lg cursor-pointer mt-4"
            onClick={handleRegister}
          >
            Register
          </motion.button>
          {/* Button */}
       
          <button
            onClick={handleBackToLogin}
            className="text-[#B7A7FD] font-semibold underline mt-4 self-center cursor-pointer"
            type="button"
          >
            Back to Login
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default RegisterPage;
