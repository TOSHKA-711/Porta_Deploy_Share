"use client";
import {
  useGetPortfolioDataQuery,
  useGetUserQuery,
} from "@/Redux/slices/User/userApi";
import { setUser } from "@/Redux/slices/User/userSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const NavBar = ({ params }: { params: { userId: string } }) => {
  // console.log("from nav bar",params.userId);
  const { userId } = params;
  // console.log("from nav bar",userId);

  const dispatch = useDispatch();
  const { data: userData, isSuccess: isUserSuccess } = useGetUserQuery(userId);
  const { data: portfolioData, isSuccess: isPortfolioSuccess } =
    useGetPortfolioDataQuery(userId);

  useEffect(() => {
    if (isPortfolioSuccess && isUserSuccess && portfolioData && userData) {
      dispatch(
        setUser({
          userData: userData.user,
          portfolio: portfolioData.portfolio,
          userId: userId,
        })
      );
    }
  }, [
    isUserSuccess,
    isPortfolioSuccess,
    userData,
    portfolioData,
    dispatch,
    params,
    userId,
  ]);

  // const data = useSelector((state: RootState) => state.user);
  // console.log(data);
  // console.log(userId);

  // if (!isUserSuccess || !isPortfolioSuccess) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="NavBar py-4 text-white flex justify-evenly items-center fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0f19]/70 backdrop-blur-md">
      {/* Logo */}
      <div className="logo flex items-center gap-2 font-bold text-lg">
        <Image src={"/Logo.svg"} alt="logo" width={20} height={50} />
        PortaDeploy.
      </div>

      {/* Links */}
      <div className="links flex gap-6 items-center justify-center">
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href={`/${userId}/home`}
        >
          Home
        </Link>
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href={`/${userId}/about`}
        >
          About
        </Link>
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href={`/${userId}/portfolio`}
        >
          Projects
        </Link>
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href={`/${userId}/home/#contact`}
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}
      {/* <Link
        href={data?.user?.githubToken === "" ? "/dashboard" : "/dashboard/home"}
        className="bg-[#9d8df1] px-8 py-2 rounded-md hover:bg-[#7c6ef1] transition"
      >
        Dashboard
      </Link> */}
      {/* <Link
        href={"/dashboard"}
        className="bg-[#9d8df1] px-8 py-2 rounded-md hover:bg-[#7c6ef1] transition"
      >
        Dashboard
      </Link> */}
    </div>
  );
};

export default NavBar;
