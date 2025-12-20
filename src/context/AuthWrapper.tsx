"use client";
import React from "react";
import { AuthProvider } from "./AuthContext";
import { Toaster } from "react-hot-toast";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Toaster
        position="bottom-right"
        
        toastOptions={{
          style: {
            background: "#1A1C22",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.08)",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#0f0f0f",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#0f0f0f",
            },
          },
          
        }}
      />
      {children}
    </AuthProvider>
  );
};

export default AuthWrapper;
