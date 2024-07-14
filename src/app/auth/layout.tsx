import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full felx items-center justify-center">{children}</div>
  );
}

export default AuthLayout;
