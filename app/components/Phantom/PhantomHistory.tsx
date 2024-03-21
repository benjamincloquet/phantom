import { useMemo } from "react";
import { formatDate } from "@/app/utils/utils";
import { PhantomHistory as PhantomHistoryType } from "@/app/api/history";

export default function PhantomHistory({
  history,
}: Readonly<{ history: PhantomHistoryType }>) {
  return (
    <footer className="mx-auto mt-4 max-w-2xl pt-2">
      <p className="text-sm text-gray-400">{"Your Phantom's History"}</p>
      <ul className="mt-2">
        {history.history.toReversed().map((historyEvent, index) => (
          <li key={index} className="mt-1 text-gray-500">
            {historyEvent.type === "creation" ? (
              <p>{`Phantom created - ${formatDate(historyEvent.date)}`}</p>
            ) : null}
            {historyEvent.type === "rename" ? (
              <p>{`Name set to ${historyEvent.name} - ${formatDate(historyEvent.date)}`}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </footer>
  );
}
