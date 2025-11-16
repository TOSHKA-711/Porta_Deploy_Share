"use client";

import { useAlert } from "@/app/src/items/hooks/useAlert";
import { useConfirm } from "@/app/src/items/hooks/useConfirm";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/Redux/slices/User/userApi";
import { IUser } from "@/Redux/Types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfileSettings() {
  const { confirm } = useConfirm();
  const [message, setMessage] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);
  const {showSuccess, showError} = useAlert();
  const { data, isLoading, error } = useGetUserQuery(undefined);
  const [updateUser] = useUpdateUserMutation();
  // console.log("User data from Redux API:", data, isLoading, error);

  const [payload, setPayload] = useState<IUser>({
    name: "",
    country: "",
    username: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    if (data?.user) {
      setPayload(data.user);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    // request the confirmation at first
    const ok = await confirm({
      title: "Update Your Data?",
      text: `Are you sure you want to Update your profile data"?`,
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
      await updateUser(payload).unwrap();
      setUpdating(false);
      showSuccess("Profile updated successfully!");
      setMessage(
        `✅ Updated successfully! Your profile data has been updated.`
      );
    } catch (err) {
      setUpdating(false);
      showError("Failed to update profile.");
      console.error("Failed to update user data:", err);
    }
  };

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500">Error loading user data.</div>;
  }

  return (
    <div className="mx-auto p-9 bg-[#141829] rounded-xl shadow-md text-white ">
      <h1 className="text-2xl font-bold mb-6 text-[#B7A7FD]">
        Profile Settings
      </h1>

      {/* Avatar Section */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={payload?.image ||"/myimg.jpeg"}
          alt="Avatar"
          width={70}
          height={70}
          className="rounded-full border border-gray-600 w-20 h-20 object-cover"
        />
        <div className="flex-1">
          <Input
            name="avatar"
            value={payload?.image}
            onChange={handleChange}
            label="Avatar URL (Github or any image link)"
          />
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#B7A7FD] mb-4">
          Personal Info
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <Input
            label="Full Name"
            name="name"
            value={payload?.name}
            onChange={handleChange}
          />
          <Input
            label="Username"
            name="username"
            value={payload?.username}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={payload?.email}
            onChange={handleChange}
          />
          <Input
            label="Country"
            name="country"
            value={payload?.country}
            onChange={handleChange}
          />
          {/* <Input
            label="Role"
            name="role"
            value={payload?.role}
            onChange={handleChange}
          /> */}
          <Input
            label="Gender"
            name="gender"
            value={payload?.gender}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right mt-6">
        <button
          onClick={handleSave}
          disabled={updating}
          className={`mt-4 py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 duration-300 ${
            updating ? "opacity-50 cursor-not-allowed" : ""
          } cursor-pointer`}
        >
          {updating ? "updating..." : "update Changes"}
        </button>

        {message && <p className="text-sm text-gray-400 mt-4">{message}</p>}
      </div>
    </div>
  );
}

/* Reusable Input Component */
const Input = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string | number | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-1 p-2 rounded bg-[#0B0E1A] border border-gray-700"
    />
  </div>
);
