import { IPhantoms } from "@/phantoms";
import Toggle from "@/app/components/Toggle";
import PhantomCaption from "@/app/components/Phantom/PhantomCaption";
import Dropdown from "@/app/components/Dropdown";
import { convertSecondsToReadableTime } from "@/app/utils/utils";

export default function Phantom({
  phantom: { name, launchType, repeatedLaunchTimes, nextLaunchIn },
}: Readonly<{ phantom: IPhantoms[number] }>) {
  const isLaunchAutomatic = launchType === "repeatedly";

  return (
    <article className="bg-phantom-bg-secondary rounded-lg p-3">
      <header className="flex items-baseline justify-between">
        <h2 className="text-ellipsis text-lg font-bold">{name}</h2>
        <Dropdown title="Manage">
          <Dropdown.Item>Rename...</Dropdown.Item>
          <Dropdown.Item>Duplicate</Dropdown.Item>
          <Dropdown.Item>Delete...</Dropdown.Item>
        </Dropdown>
      </header>
      <footer className="mt-2 flex items-center">
        <Toggle value={isLaunchAutomatic} />
        {isLaunchAutomatic ? (
          <div className="border-phantom-text-secondary gap-0.5 ml-2 flex flex-col items-baseline border-l pl-2">
            <PhantomCaption>{repeatedLaunchTimes?.simplePreset}</PhantomCaption>
            {nextLaunchIn ? (
              <PhantomCaption>
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
