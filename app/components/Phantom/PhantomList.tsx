"use client";

import usePhantoms from "@/app/hooks/usePhantoms";
import Phantom from "@/app/components/Phantom/Phantom";
import PhantomFilter from "@/app/components/Phantom/PhantomFilter";
import PhantomLoader from "@/app/components/Phantom/PhantomLoader";
import PhantomPlaceholder from "@/app/components/Phantom/PhantomPlaceholder";
import useSearchParamFilter from "@/app/hooks/useSearchParamFilter";

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

export default function PhantomList() {
  const { phantoms, isLoading, maxPhantoms } = usePhantoms();
  const [launchType, setLaunchType] = useSearchParamFilter("launchType");
  const [category, setCategory] = useSearchParamFilter("category");

  const renderLoader = () =>
    [...Array(maxPhantoms)].map((_, index) => (
      <li key={index}>
        <PhantomLoader />
      </li>
    ));

  const renderEmpty = () => (
    <PhantomPlaceholder>
      <div className="flex flex-col gap-y-2">
        <p className="text-phantom-text-secondary">
          Boo ! Nothing to see here.
        </p>
        <button className="rounded-lg bg-phantom-accent px-2 py-1 text-white">
          Use a new Phantom
        </button>
      </div>
    </PhantomPlaceholder>
  );

  const renderList = () => {
    return phantoms
      .filter((phantom) => !launchType || phantom.launchType === launchType)
      .filter(
        (phantom) =>
          !category || phantom.manifest.tags.categories.includes(category),
      )
      .map((phantom) => (
        <li key={phantom.id}>
          <Phantom phantom={phantom} />
        </li>
      ));
  };

  return (
    <main className="gap-2 lg:grid lg:grid-cols-4">
      <section className="lg:col-span-1">
        <p className="mb-2 text-lg font-bold">{"Filters"}</p>
        <div className="grid grid-cols-2 lg:block">
          <div className="col-span-1">
            <PhantomFilter
              name="Launch type"
              category={launchType}
              categories={launchTypes}
              onCategorySelected={(launchType) => setLaunchType(launchType)}
            />
          </div>
          <div className="col-span-1">
            <PhantomFilter
              name="Category"
              category={category}
              categories={categories}
              onCategorySelected={(category) => setCategory(category)}
            />
          </div>
        </div>
      </section>
      <section className="col-span-3">
        <ul className="flex flex-col gap-2">
          {isLoading
            ? renderLoader()
            : phantoms.length === 0
              ? renderEmpty()
              : renderList()}
        </ul>
      </section>
    </main>
  );
}
