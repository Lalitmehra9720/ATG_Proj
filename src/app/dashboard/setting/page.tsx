"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import Link from "@deemlol/next-icons/build/icons/link";
export default function SettingPage() {
  const { logout, user } = useAuth();
  const router = useRouter();

  if (!user) {
    return <div className="p-8 mt-20 text-gray-400">Loading settings...</div>;
  }

  return (
    <div className="p-8 text-white space-y-10 mt-20 w-full px-3 lg:px-[165px]">
      <div>
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage your account preferences and security
        </p>
      </div>
      <div className="bg-[#18181c] rounded-2xl p-6 flex items-center gap-6">
        <div className="w-13 h-13  md:w-15 md:h-15 lg:w-20 lg:h-20 rounded-full bg-[#23232a] flex items-center justify-center text-2xl font-semibold uppercase">
          {user.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-medium capitalize">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>

        <Button className="">
          Edit Profile
        </Button>
        <a href="/dashboard" className="text-sm text-blue-400 hover:text-blue-300">
          Back to Dashboard
        </a>
      </div>
      <div className="bg-[#18181c] rounded-2xl p-6 space-y-6">
        <h2 className="text-lg font-medium">Account Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-400">Username</label>
            <input
              type="text"
              value={user.name}
              disabled
              className="mt-1 w-full bg-[#23232a] rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Phone</label>
            <input
              type="text"
              value={"9809090912"}
              disabled
              className="mt-1 w-full bg-[#23232a] rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">City</label>
            <input
              type="text"
              value={"Haldwani, Uttrakhand"}
              disabled
              className="mt-1 w-full bg-[#23232a] rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#18181c] rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-medium">Security</h2>

        <div className="flex flex-wrap gap-4">
          <Button className="disabled ">
            Change Password
          </Button>

          <button
            className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg text-sm hover:bg-red-700/20 transition cursor-pointer"
            onClick={() => {
              logout();
              toast.success("Logout successfully");
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
