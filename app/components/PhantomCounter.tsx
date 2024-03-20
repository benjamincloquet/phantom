"use client";

import usePhantoms from "@/app/hooks/usePhantoms";

export default function Counter({
  max,
}: Readonly<{
  max: number;
}>) {
  const { phantoms } = usePhantoms();
  return (
    <span className="">
      {phantoms.length} / {max}
    </span>
  );
}
