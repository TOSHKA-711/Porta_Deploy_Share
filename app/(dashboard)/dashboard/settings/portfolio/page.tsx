"use client";
import { useAlert } from "@/app/src/items/hooks/useAlert";
import { useConfirm } from "@/app/src/items/hooks/useConfirm";
import {
  useGetPortfolioDataQuery,
  useUpdatePortfolioDataMutation,
} from "@/Redux/slices/User/userApi";
import Input from "@mui/material/Input";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function PortfolioSettingsPage() {
  const { confirm } = useConfirm();
  const [message, setMessage] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);
  const { showSuccess, showError } = useAlert();
  const {
    data: portfolioData,
    isLoading,
    error,
  } = useGetPortfolioDataQuery(undefined);
  const [updatePortfolioData] = useUpdatePortfolioDataMutation();

  const [payload, setPayload] = useState({
    name: "",
    role: "",
    bio: "",
    socialLinks: {
      github: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      email: "",
      mobile: "",
    },
    theme: "default",
  });

  console.log(payload);
  // console.log(portfolioData);

  // refresh payload when portfolioData changes
  useEffect(() => {
    if (portfolioData) {
      setPayload({
        name: portfolioData?.user?.name || "",
        role: portfolioData?.portfolio?.role || "",
        bio: portfolioData?.portfolio?.bio || "",
        socialLinks: {
          github: portfolioData?.portfolio?.socialLinks?.github || "",
          linkedin: portfolioData?.portfolio?.socialLinks?.linkedin || "",
          facebook: portfolioData?.portfolio?.socialLinks?.facebook || "",
          twitter: portfolioData?.portfolio?.socialLinks?.twitter || "",
          email: portfolioData?.portfolio?.socialLinks?.email || "",
          mobile: portfolioData?.portfolio?.socialLinks?.mobile || "",
        },
        theme: portfolioData?.portfolio?.theme || "default",
      });
    }
  }, [portfolioData]);

  //  handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handleLinkChange
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  // handle save changes
  const handleSaveChanges = async () => {
    // request the confirmation at first
    const ok = await confirm({
      title: "Update Your Data?",
      text: `Are you sure you want to Update your portfolio data"?`,
      icon: "question",
      confirmButtonText: "Yes, Update",
      cancelButtonText: "Cancel",
    });

    if (!ok) {
      setMessage("❌ updating cancelled");
      return;
    }

    // if ok
    setUpdating(true);
    setMessage("updating...");

    try {
      await updatePortfolioData(payload).unwrap();
      setUpdating(false);
      showSuccess("Profile updated successfully!");
      setMessage(
        `✅ Updated successfully! Your portfolio data has been updated.`
      );
    } catch (error) {
      setUpdating(false);
      showError("Failed to update profile.");
      console.log(error);
    }
  };

  if (isLoading) return <div className="text-white p-6">Loading...</div>;
  if (error)
    return <div className="text-red-500 p-6">Error loading settings</div>;

  return (
    <div className="mx-auto p-9 bg-[#141829] rounded-xl shadow-md text-white ">
      <h1 className="text-3xl font-bold mb-6"> 🎨 Portfolio Settings</h1>
      <div className="flex flex-col justify-center gap-6">
        {/* Basic Info */}
        <section className="p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#B7A7FD]">
            Basic Info
          </h2>
          <div className="flex flex-col gap-4">
            <Input
              className="bg-[#1E2533] p-3 rounded"
              onChange={handleChange}
              name="name"
              placeholder="Full Name"
              sx={{ color: "white" }}
              value={payload.name}
            />
            <Input
              className="bg-[#1E2533] p-3 rounded"
              onChange={handleChange}
              name="role"
              placeholder="Role / Position"
              sx={{ color: "white" }}
              value={payload.role}
            />
            <textarea
              className="bg-[#1E2533] p-3 rounded"
              onChange={handleChange}
              name="bio"
              placeholder="Your Bio"
              rows={4}
              value={payload.bio}
            ></textarea>
          </div>
        </section>

        {/* Links Section */}
        <section className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#B7A7FD] mb-4">Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="GitHub URL"
              name="github"
              value={payload?.socialLinks?.github}
              onChange={handleLinkChange}
              className="bg-[#1E2533] p-3 rounded"
              sx={{ color: "white" }}
            />
            <Input
              placeholder="LinkedIn URL"
              name="linkedin"
              value={payload.socialLinks.linkedin}
              onChange={handleLinkChange}
              className="bg-[#1E2533] p-3 rounded"
              sx={{ color: "white" }}
            />
            <Input
              placeholder="facebook URL"
              name="facebook"
              value={payload?.socialLinks?.facebook}
              onChange={handleLinkChange}
              className="bg-[#1E2533] p-3 rounded"
              sx={{ color: "white" }}
            />
            <Input
              placeholder="twitter URL"
              name="twitter"
              value={payload?.socialLinks?.twitter}
              onChange={handleLinkChange}
              className="bg-[#1E2533] p-3 rounded"
              sx={{ color: "white" }}
            />
            <Input
              placeholder="Your business Gmail"
              name="email"
              value={payload?.socialLinks?.email}
              onChange={handleLinkChange}
              className="bg-[#1E2533] p-3 rounded"
              sx={{ color: "white" }}
            />{" "}
            <Input
              placeholder="phone number (WhatsApp) with country code"
              name="mobile"
              value={payload?.socialLinks?.mobile}
              onChange={handleLinkChange}
              className="bg-[#1E2533] p-3 rounded"
              sx={{ color: "white" }}
            />
          </div>
        </section>

        {/* Portfolio Theme */}
        <section className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#B7A7FD]">
            Portfolio Theme
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() =>
                setPayload((prev) => ({ ...prev, theme: "default" }))
              }
              className={`${
                payload.theme === "default" ? "bg-[#B7A7FD] text-black hover:text-white " : "bg-[#1E2533]"
              } p-3 rounded w-full hover:bg-[#2A3245] cursor-pointer transition-all duration-300`}
            >
              Default Theme
            </button>

            <button
              onClick={() => setPayload((prev) => ({ ...prev, theme: "dark" }))}
              className={`${
                payload.theme === "dark" ? "bg-[#B7A7FD] text-black hover:text-white " : "bg-[#1E2533]"
              } p-3 rounded w-full hover:bg-[#2A3245] cursor-pointer transition-all duration-300`}
            >
              Dark Theme
            </button>

            <button
              onClick={() =>
                setPayload((prev) => ({ ...prev, theme: "light" }))
              }
              className={`${
                payload.theme === "light" ? "bg-[#B7A7FD] text-black hover:text-white " : "bg-[#1E2533]"
              } p-3 rounded w-full hover:bg-[#2A3245] cursor-pointer transition-all duration-300`}
            >
              Light Theme
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#B7A7FD]">
            Projects
          </h2>
          <p className="text-gray-400 mb-4">
            Static placeholder — you will connect it later.
          </p>
          <div className="bg-[#1E2533] p-4 rounded flex justify-between items-center">
            <span>Project Title</span>
            <button className="bg-[#B7A7FD] text-black px-4 py-1 rounded">
              Edit
            </button>
          </div>
        </section>

        {/* Save Button */}
        <div className="text-right mt-6">
          <button
            onClick={handleSaveChanges}
            disabled={updating}
            className={`mt-4 py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 duration-300 ${
              updating ? "opacity-50 cursor-not-allowed" : ""
            } cursor-pointer`}
          >
            {updating ? "saving..." : "save Changes"}
          </button>

          {message && <p className="text-sm text-gray-400 mt-4">{message}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
