"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { IoKeyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { useAlert } from "@/app/src/items/hooks/useAlert";
import { useLoginMutation } from "@/Redux/slices/Auth/authApi";

const LoginPage = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const { showSuccess, showError } = useAlert();
  const router = useRouter();
  const [login] = useLoginMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  handle register
  const handleRegister = () => {
    router.push("/src/auth/register");
  };

  // handle login API call
  const handleLogin = async () => {
    try {
      await login({
        email: payload.email,
        password: payload.password,
      }).unwrap();
      showSuccess("Login successful!");

      router.push("/src/pages/home");
    } catch (error) {
      showError( "Login failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="login w-full h-screen bg-[#0B0E1A] flex items-center justify-center relative max-sm:px-4"
        
      >
        <Image
          src="/logo1.svg"
          alt="logo"
          width={70}
          height={100}
          className="absolute top-4 left-5"
        />
        <div
          className="card bg-[#1E232A] flex flex-col items-start pr-6 pl-8 py-8 gap-5 min-w-[450px] rounded-lg max-sm:min-w-[320px]"
          style={{ boxShadow: "0px 3.48px 3.48px 0px #00000040" }}
        >
          <span className="flex flex-col items-start gap-1">
            <h2 className="text-[#B7A7FD] font-semibold">Welcome</h2>
            <p className="text-[13px] text-gray-300">
              Enter your login details below
            </p>
          </span>

          {/* Email */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px] text-gray-300">Email</p>
            <span className="flex items-center justify-between border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="email"
                value={payload.email}
                type="text"
                className="border-none outline-none px-3 py-2 w-full text-zinc-300"
                placeholder="Enter your email"
              />
              <CiMail className="text-[20px] text-zinc-300" />
            </span>
          </div>

          {/* Password */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px] text-gray-300">Password</p>
            <span className="flex items-center justify-between border-2 px-3 rounded-2xl w-full border-[#B7A7FD]">
              <input
                onChange={handleInputChange}
                name="password"
                value={payload.password}
                type="password"
                className="border-none outline-none px-3 py-2 w-full text-zinc-300"
                placeholder="Enter your password"
              />
              <IoKeyOutline className="text-[20px] text-zinc-300" />
            </span>
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[#B7A7FD] text-white self-center w-full p-2 rounded-lg cursor-pointer mt-4"
            onClick={handleLogin}
          >
            Login
          </motion.button>

          {/* Register Option */}
          <div className="w-full flex justify-center mt-2">
            <span className="text-[13px] text-zinc-400">
              Don&apos;t have an account?{" "}
              <button
                onClick={handleRegister}
                className="text-[#B7A7FD] font-semibold underline ml-1 cursor-pointer"
                type="button"
              >
                Register
              </button>
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;
