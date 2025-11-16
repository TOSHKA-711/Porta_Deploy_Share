"use client";

import { useAlert } from "@/app/src/items/hooks/useAlert";
import { useConfirm } from "@/app/src/items/hooks/useConfirm";
import { useUploadProjectMutation } from "@/Redux/slices/Project/projectApi";
import { useState, ChangeEvent } from "react";
import { ToastContainer } from "react-toastify";

export default function Projects() {
  const [folder, setFolder] = useState<File[] | null>(null);
  const [repoName, setRepoName] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { showSuccess, showError } = useAlert();
  const { confirm } = useConfirm();
  const [uploadProject] = useUploadProjectMutation();

  //  choose folder
  const handleFolderSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFolder(Array.from(files));
      setMessage(`Selected ${files.length} files`);
    }
  };

  // upload folder to backend as FormData
  const handleUpload = async () => {
    if (!folder || !repoName) {
      setMessage("Please select a folder and enter a repo name!");
      return;
    }

    // request the confirmation at first
    const ok = await confirm({
      title: "Upload Project?",
      text: `Are you sure you want to upload the project "${repoName}"?`,
      icon: "question",
      confirmButtonText: "Yes, upload",
      cancelButtonText: "Cancel",
    });

    if (!ok) {
      setMessage("❌ Upload cancelled");
      return;
    }

    // if ok
    setUploading(true);
    setMessage("Uploading...");

    try {
      const formData = new FormData();
      formData.append("repoName", repoName);
      folder.forEach((file) => formData.append("files", file));

      await uploadProject(formData).unwrap();
      showSuccess("Project uploaded successfully!");
      setMessage(
        `✅ Uploaded successfully! Repo: ${repoName} , it will be available within 20 seconds`
      );
      setFolder(null);
      setRepoName("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed");
      showError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (typeof window === "undefined") {
    return null; // Ensure this code runs only on the client side
  }

  return (
    <div className=" w-full h-[92vh] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-semibold mb-8">
        🚀 Upload Project to GitHub
      </h1>

      <div className="flex flex-col gap-4 bg-[#1a1a1d] p-8 rounded-2xl w-full max-w-lg shadow-lg">
        <label className="text-gray-400">Choose project folder</label>

        <input
          type="file"
          multiple
          webkitdirectory=""
          directory=""
          onChange={handleFolderSelect}
          className="cursor-pointer text-gray-300 bg-[#2a2a2e] p-2 rounded border border-gray-700 outline-none"
        />

        <label className="text-gray-400">Repository name</label>
        <input
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          placeholder="e.g. my-portfolio"
          className="p-2 rounded bg-[#2a2a2e] border border-gray-700 outline-none"
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`mt-4 py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 duration-300 ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          } cursor-pointer`}
        >
          {uploading ? "Uploading..." : "Upload to GitHub"}
        </button>

        {message && <p className="text-sm text-gray-400 mt-4">{message}</p>}
      </div>
      <ToastContainer />
    </div>
  );
}
