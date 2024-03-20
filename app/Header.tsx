"use client";

import type { Metadata } from "next";
import PhantomsProvider from "@/app/context/PhantomsContext";
import Container from "@/app/components/common/Container";
import PageTitle from "@/app/components/common/PageTitle";
import Counter from "@/app/components/common/Counter";
import PhantomList from "@/app/components/Phantom/PhantomList";
import usePhantoms from "@/app/hooks/usePhantoms";

export default function Dashboard() {
  const { phantoms, MAX_PHANTOMS, isLoading, reloadPhantoms } = usePhantoms();

  return (
    <header className="flex items-baseline justify-between">
      <hgroup className="flex items-baseline justify-center space-x-2">
        <PageTitle text="Dashboard" />
        <Counter current={phantoms.length} max={MAX_PHANTOMS} />
      </hgroup>
      <button disabled={isLoading} onClick={reloadPhantoms}>
        {"Reload cache"}
      </button>
    </header>
  );
}
