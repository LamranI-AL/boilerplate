"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

function UserSlice() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <UserButton />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">{user?.fullName}</strong>

          <span> {user?.emailAddresses[0].emailAddress} </span>
        </p>
      </div>
    </div>
  );
}

export default UserSlice;
