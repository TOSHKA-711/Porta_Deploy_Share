// app/dashboard/layout.tsx
"use client";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0E1A] text-white">{children}</div>
  );
}
