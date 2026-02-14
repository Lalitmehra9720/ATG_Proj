"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
export default function Signup() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/auth/signup", signupData);
      console.log(data);
      login(data.user, data.token);

      toast.success(data.message);
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof AxiosError)
        setError(
          err.response?.data?.message || "Something went wrong in signup"
        );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20 lg:pt-50 ">
      <h1 className="text-4xl font-semibold lg:mt-10 self-start mt-4">
        Register
      </h1>
      <p className="mt-2 text-white/50 max-w-sm">
        A good design is not only aesthetically pleasing, but also functional.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-sm w-full">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={signupData.name}
          onChange={handleChange}
          className="w-full rounded-lg bg-[#1A1C22] px-4 py-3 text-sm outline-none placeholder:text-white/40"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={signupData.email}
          onChange={handleChange}
          className="w-full rounded-lg bg-[#1A1C22] px-4 py-3 text-sm outline-none placeholder:text-white/40"
        />
        <div className="w-full relative rounded-lg flex items-center justify-center">
          <input
            type={!show ? "password" : "text"}
            name="password"
            placeholder="Password"
            required
            value={signupData.password}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#1A1C22] px-4 py-3 text-sm outline-none placeholder:text-white/40"
          />
          <button
            onClick={() => {
              setShow((prev) => !prev);
            }}
            className="absolute right-4 p-2 text-sm text-white/50 hover:text-white cursor-pointer transition"
            type="button"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat Password"
          required
          value={signupData.confirmPassword}
          onChange={handleChange}
          className="w-full rounded-lg bg-[#1A1C22] px-4 py-3 text-sm outline-none placeholder:text-white/40"
        />

        <Button type="submit" className="py-4 px-6 w-full" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Signup Now"}
        </Button>

        <p className="mt-4 text-sm text-white/50">
          Already have an account?{" "}
          <Link href="/login" className="text-white">
            Login
          </Link>
        </p>
      </form>

      <div className="mt-6 flex gap-4">
        <SocialButton icon="/images/google.png" label="Google" />
        <SocialButton icon="/images/twitter.png" label="Twitter" />
      </div>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex items-center gap-3 rounded-lg bg-[#1A1C22] px-4 py-2 text-sm w-[181px] h-[82px] hover:bg-[#252830] transition">
      <Image src={icon} alt={label} width={20} height={20} />
      <div className="flex flex-col leading-tight text-left">
        <span className="text-gray-500 text-sm">Register with</span>
        <span className="text-white font-medium">{label}</span>
      </div>
    </button>
  );
}
