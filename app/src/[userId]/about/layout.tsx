"use client";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function HomeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { userId: string };
}>) {
  return (
    <div>
      <NavBar params={params} />
      {children}
      <Footer />
    </div>
  );
}
