import { Suspense } from "react";
// import Aside from "./_components/Aside";
import Loading from "./loading";
import { GetEmployers } from "@/_services/GetEmployers";
import Aside from "@/_components/Aside";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 lg:gap-8">
          <Aside type="ouvrier" />
          <div className="h-32 lg:col-span-9">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </Suspense>
    </section>
  );
}
