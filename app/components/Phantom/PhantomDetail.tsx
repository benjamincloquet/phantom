"use client";

import Phantom from "@/app/components/Phantom/Phantom";
import PhantomLoader from "@/app/components/Phantom/PhantomLoader";
import PhantomPlaceholder from "@/app/components/Phantom/PhantomPlaceholder";
import usePhantoms from "@/app/hooks/usePhantoms";

export default function PhantomDetail({ id }: Readonly<{ id: string }>) {
  const { phantoms, isLoading } = usePhantoms();

  const phantom = phantoms.find((phantom) => phantom.id === id);

  return isLoading ? (
    <PhantomLoader />
  ) : phantom ? (
    <Phantom phantom={phantom} className="mx-auto" disableLink={true} />
  ) : (
    <PhantomPlaceholder>
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-phantom-text-secondary">Something went wrong.</p>
        <a
          href="/"
          className="rounded-lg bg-phantom-accent px-2 py-1 text-white"
        >
          Back to Dashboard
        </a>
      </div>
    </PhantomPlaceholder>
  );
}
