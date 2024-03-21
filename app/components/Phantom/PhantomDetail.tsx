"use client";

import Phantom from "@/app/components/Phantom/Phantom";
import PhantomLoader from "@/app/components/Phantom/PhantomLoader";
import PhantomPlaceholder from "@/app/components/Phantom/PhantomPlaceholder";
import PhantomHistory from "@/app/components/Phantom/PhantomHistory";
import usePhantoms from "@/app/hooks/usePhantoms";
import useHistory from "@/app/hooks/useHistory";

export default function PhantomDetail({ id }: Readonly<{ id: string }>) {
  const { phantoms, isLoading } = usePhantoms();
  const phantom = phantoms.find((phantom) => phantom.id === id);
  const { history, addHistoryEvent } = useHistory(id);

  const onRename = (name: string) => {
    addHistoryEvent({
      type: "rename",
      date: Date.now(),
      name: name,
    });
  };

  return isLoading ? (
    <PhantomLoader />
  ) : phantom ? (
    <div className="mt-4">
      <Phantom
        phantom={phantom}
        className="mx-auto"
        disableLink={true}
        onRename={onRename}
      />
      {history ? <PhantomHistory history={history} /> : null}
    </div>
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
