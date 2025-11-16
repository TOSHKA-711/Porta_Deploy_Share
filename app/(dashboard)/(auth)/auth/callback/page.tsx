"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useGitHubLoginMutation } from "@/Redux/slices/Auth/authApi";


export type GitHubTokenResponse = {
 data ?: {
    token: string;
  };
};

export default function GitHubCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [gitHubLogin] = useGitHubLoginMutation();
  console.log("Authorization Code:", code);

  const router = useRouter();

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      if (!code) return;

      try {
        const res = await gitHubLogin({ code });
        const data = (res as GitHubTokenResponse).data; 

      
        console.log("GitHub Token Response:", data);

        if (data) {
          localStorage.setItem("GitHubToken", data?.token);
          router.push("/dashboard/home");
        } else {
          console.error("GitHub login failed:", data);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    exchangeCodeForToken();
  }, [code, router]);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#0B0E1A] text-white">
      <p className="text-lg text-[#B7A7FD] animate-pulse">
        Connecting your GitHub account...
      </p>
    </div>
  );
}
