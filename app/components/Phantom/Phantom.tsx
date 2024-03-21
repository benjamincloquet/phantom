import { IPhantoms } from "@/phantoms";
import Toggle from "@/app/components/common/Toggle";
import PhantomCaption from "@/app/components/Phantom/PhantomCaption";
import Dropdown from "@/app/components/common/Dropdown";
import Dialog from "@/app/components/common/Dialog";
import PhantomCategories from "@/app/components/Phantom/PhantomCategories";
import { convertSecondsToReadableTime } from "@/app/utils/utils";
import usePhantoms from "@/app/hooks/usePhantoms";
import { useState, useRef } from "react";

export default function Phantom({
  phantom,
  className,
  disableLink,
}: Readonly<{
  phantom: IPhantoms[number];
  className?: string;
  disableLink?: boolean;
}>) {
  const {
    id,
    name,
    launchType,
    repeatedLaunchTimes,
    nextLaunchIn,
    manifest: {
      tags: { categories },
    },
  } = phantom;
  const isLaunchAutomatic = launchType === "repeatedly";
  const { hasReachedPhantomsLimit, dispatch } = usePhantoms();
  const [newName, setNewName] = useState(name);
  const article = useRef<HTMLElement>(null);

  const duplicatePhantom = () => {
    dispatch({ type: "duplicate", payload: phantom });
  };

  const deletePhantom = () => {
    dispatch({ type: "delete", payload: phantom.id });
  };

  const renamePhantom = () => {
    dispatch({ type: "rename", payload: { id, name: newName } });
    if (article.current) article.current.focus();
  };

  return (
    <article
      ref={article}
      className={`${className} relative mx-auto min-h-20 max-w-2xl rounded-lg bg-phantom-bg-secondary p-3 shadow-sm lg:h-19`}
    >
      <a
        href={`/phantom/${id}`}
        className={`absolute inset-0 h-full w-full rounded-xl ${disableLink ? "invisible" : ""}`}
      >
        <span className="sr-only">Détails</span>
      </a>
      <header>
        <div className="mb-2 lg:hidden">
          <PhantomCategories categories={categories} />
        </div>
        <div className="flex justify-between">
          <hgroup className="">
            <div className="hidden lg:block">
              <PhantomCategories categories={categories} />
            </div>
            <h2 className="text-ellipsis text-lg font-bold lg:mt-2">{name}</h2>
          </hgroup>
          <Dropdown title="Manage">
            <Dialog
              render={(openDialog) => (
                <Dropdown.Item onClick={openDialog}>Rename...</Dropdown.Item>
              )}
              onConfirm={renamePhantom}
            >
              <p className="mb-3 text-phantom-text-secondary">
                Rename your Phantom
              </p>
              <input
                type="text"
                className="w-50 max-w-full rounded-md border border-gray-300 px-3 py-2"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />
            </Dialog>
            <Dropdown.Item
              disabled={hasReachedPhantomsLimit}
              onClick={duplicatePhantom}
            >
              Duplicate
            </Dropdown.Item>
            <Dialog
              render={(openDialog) => (
                <Dropdown.Item onClick={openDialog}>
                  <span className="text-orange-600">Delete...</span>
                </Dropdown.Item>
              )}
              onConfirm={deletePhantom}
            >
              Are you sure you want to delete this Phantom ?
            </Dialog>
          </Dropdown>
        </div>
      </header>
      <footer className="mt-2 flex items-center">
        <Toggle value={isLaunchAutomatic} />
        {isLaunchAutomatic ? (
          <div className="ml-2 flex flex-col items-baseline gap-x-2 gap-y-0.5 border-l border-phantom-text-secondary pl-2 lg:flex-row lg:border-0 lg:pl-0">
            <PhantomCaption>{repeatedLaunchTimes?.simplePreset}</PhantomCaption>
            {nextLaunchIn ? (
              <PhantomCaption className="lg:border-l lg:border-phantom-text-secondary lg:pl-2">
                {`Next launch in ${convertSecondsToReadableTime(nextLaunchIn)}`}
              </PhantomCaption>
            ) : null}
          </div>
        ) : (
          <PhantomCaption className="ml-2">{"Launch manually"}</PhantomCaption>
        )}
      </footer>
    </article>
  );
}
