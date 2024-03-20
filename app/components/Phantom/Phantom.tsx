import { IPhantoms } from "@/phantoms";
import Toggle from "@/app/components/common/Toggle";
import PhantomCaption from "@/app/components/Phantom/PhantomCaption";
import Dropdown from "@/app/components/common/Dropdown";
import { convertSecondsToReadableTime } from "@/app/utils/utils";
import usePhantoms from "@/app/hooks/usePhantoms";

export default function Phantom({
  phantom,
  className,
}: Readonly<{ phantom: IPhantoms[number]; className?: string }>) {
  const { id, name, launchType, repeatedLaunchTimes, nextLaunchIn } = phantom;
  const isLaunchAutomatic = launchType === "repeatedly";
  const { hasReachedPhantomsLimit, dispatch } = usePhantoms();

  const duplicatePhantom = () => {
    dispatch({ type: "duplicate", payload: phantom });
  };

  const deletePhantom = () => {
    dispatch({ type: "delete", payload: phantom.id });
  };

  return (
    <article
      className={`${className} bg-phantom-bg-secondary relative max-w-2xl rounded-lg p-3 shadow-sm`}
    >
      <a
        href={`/phantom/${id}`}
        className="absolute inset-0 h-full w-full rounded-xl"
      >
        <span className="sr-only">Détails</span>
      </a>
      <header className="flex items-baseline justify-between">
        <h2 className="text-ellipsis text-lg font-bold">{name}</h2>
        <Dropdown title="Manage">
          <Dropdown.Item>Rename...</Dropdown.Item>
          <Dropdown.Item
            disabled={hasReachedPhantomsLimit}
            onClick={duplicatePhantom}
          >
            Duplicate
          </Dropdown.Item>
          <Dropdown.Item onClick={deletePhantom}>Delete...</Dropdown.Item>
        </Dropdown>
      </header>
      <footer className="mt-2 flex items-center">
        <Toggle value={isLaunchAutomatic} />
        {isLaunchAutomatic ? (
          <div className="border-phantom-text-secondary gap-y-0.5 ml-2 flex flex-col items-baseline gap-x-2 border-l pl-2 lg:flex-row lg:border-0 lg:pl-0">
            <PhantomCaption>{repeatedLaunchTimes?.simplePreset}</PhantomCaption>
            {nextLaunchIn ? (
              <PhantomCaption className="lg:border-phantom-text-secondary lg:border-l lg:pl-2">
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
