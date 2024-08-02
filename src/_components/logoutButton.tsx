"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

function LogoutButton() {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
      type="submit"
    >
      <LogOut />
    </Button>
  );
}

export default LogoutButton;
