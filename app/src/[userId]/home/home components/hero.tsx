"use client";

import { RootState } from "@/Redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

const Hero = () => {

  const data = useSelector((state: RootState) => state.user.data?.userData);


  return (
    <section className="relative overflow-hidden py-16">
      <div className="container mx-auto relative z-10 grid gap-8">
        <div className="m-auto flex justify-center md:justify-start items-start gap-2 text-white">
          <Image width={70} height={30} src="/arrow.png" alt="arrow" />
          <h4 className="text-3xl -mt-4 ">
            Hello! I Am
            <span className="text-[#7127BA] font-semibold">
              {" "} {data?.name}
            </span>
          </h4>
        </div>
        <div className="grid md:grid-cols-2 gap-6 place-items-center">
          <div className="order-2 md:order-1 relative flex justify-center md:justify-start">
            <div
              className="absolute blur-[40px] z-0 left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2 md:left-[50%] md:top-1/2"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(118,60,172,0.9) 0%, rgba(118,60,172,0.4) 40%, rgba(0,0,0,0) 60%)",
              }}
            ></div>

            <Image
              className="relative z-10 w-[220px] md:w-[260px] lg:w-[200px]"
              width={300}
              height={300}
              src="/image 1.svg"
              alt="hero"
            />
          </div>

          <div className="order-1 md:order-2 text-center md:text-left text-white space-y-3 me-auto">
            <h4 className="text-xl">A Designer who</h4>

            <h2 className="text-4xl md:text-5xl font-bold w-full md:w-[380px] leading-tight">
              Judges a book by its
              <span
                className="text-[#7127BA] inline-block border border-white px-5 py-1 ml-2"
                style={{
                  borderRadius: "83% 17% 86% 14% / 90% 14% 86% 10%",
                }}
              >
                cover
              </span>
              ...
            </h2>

            <p className="text-gray-300">
              Because if the cover does not impress you, what else can?
            </p>
          </div>
        </div>

        <div
          className="text-white space-y-4 text-center md:text-left px-4 m-auto 
          mt-8 md:mt-16 lg:mt-24 md:w-3/4"
        >
          <h2 className="text-3xl md:text-5xl font-semibold">
            I'm a {data?.name}. |
          </h2>

          <h4 className="text-lg">
            Currently, I'm a {data?.role} at
            <span className="text-[#1877F2] font-semibold flex"> Facebook</span>
          </h4>

          <p className="text-gray-300">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
