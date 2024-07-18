import { Suspense } from "react";
import Aside from "../../_components/Aside";
import Loading from "./loading";

export default async function CondidatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 lg:gap-8">
          <Aside type="condidate" />
          <div className="h-32 lg:col-span-9">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </Suspense>
    </section>
  );
}
