"use client";

import usePhantoms from "@/app/hooks/usePhantoms";
import Phantom from "@/app/components/Phantom/Phantom";
import { useEffect } from "react";

export default function PhantomList({}: Readonly<{}>) {
  const { phantoms, execute: getPhantoms, isLoading } = usePhantoms();

  useEffect(() => {
    getPhantoms();
  }, [getPhantoms]);

  return (
    <>
      <p>{isLoading ? "Loading..." : ""}</p>
      <ul className="mt-2 flex flex-col gap-2">
        {phantoms.map((phantom) => (
          <li key={phantom.id}>
            <Phantom phantom={phantom} />
          </li>
        ))}
      </ul>
    </>
  );
}
