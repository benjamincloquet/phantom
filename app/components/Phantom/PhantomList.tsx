"use client";

import { useState } from "react";
import usePhantoms from "@/app/hooks/usePhantoms";
import Phantom from "@/app/components/Phantom/Phantom";
import PhantomFilter from "@/app/components/Phantom/PhantomFilter";
import PhantomLoader from "@/app/components/Phantom/PhantomLoader";

const launchTypes = [
  { label: "Automatic", value: "repeatedly" },
  { label: "Manual", value: "manually" },
];

const categories = [
  { label: "Flow", value: "workflow" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "Instagram", value: "instagram" },
  { label: "Mail", value: "mail" },
  { label: "Sales Navigator", value: "salesNavigator" },
];

export default function PhantomList({}: Readonly<{}>) {
  const { phantoms, isLoading, maxPhantoms } = usePhantoms();
  const [launchType, setLaunchType] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  return (
    <main className="grid grid-cols-4 gap-2">
      <section className="col-span-1">
        <p className="mb-2 text-lg font-bold">{"Filters"}</p>
        <PhantomFilter
          name="Launch type"
          category={launchType}
          categories={launchTypes}
          onCategorySelected={(launchType) => setLaunchType(launchType)}
        />
        <PhantomFilter
          name="Category"
          category={category}
          categories={categories}
          onCategorySelected={(category) => setCategory(category)}
        />
      </section>
      <section className="col-span-3">
        <ul className="flex flex-col gap-2">
          {isLoading
            ? [...Array(maxPhantoms)].map((_, index) => (
                <li key={index}>
                  <PhantomLoader />
                </li>
              ))
            : phantoms
                .filter(
                  (phantom) => !launchType || phantom.launchType === launchType,
                )
                .filter(
                  (phantom) =>
                    !category ||
                    phantom.manifest.tags.categories.includes(category),
                )
                .map((phantom) => (
                  <li key={phantom.id}>
                    <Phantom phantom={phantom} />
                  </li>
                ))}
        </ul>
      </section>
    </main>
  );
}
