"use client";

import Phantom from "@/app/components/Phantom/Phantom";
import usePhantoms from "@/app/hooks/usePhantoms";

export default function PhantomDetail({ id }: Readonly<{ id: string }>) {
  const { phantoms } = usePhantoms();

  const phantom = phantoms.find((phantom) => phantom.id === id);

  return phantom ? <Phantom phantom={phantom} className="mx-auto" /> : null;
}
