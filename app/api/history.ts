import { IPhantoms } from "@/phantoms";

export type HistoryEvent =
  | {
      type: "creation";
      date: number;
    }
  | {
      type: "rename";
      date: number;
      name: string;
    };

export type PhantomHistory = {
  id: string;
  history: HistoryEvent[];
};

const LOCAL_STORAGE_HISTORY_KEY = "history";

export function clearHistory() {
  localStorage.removeItem(LOCAL_STORAGE_HISTORY_KEY);
}

export function createHistory(phantoms: IPhantoms) {
  const history: PhantomHistory[] = phantoms.map((phantom) => ({
    id: phantom.id,
    history: [
      { type: "creation", date: Date.now() },
      { type: "rename", date: Date.now(), name: phantom.name },
    ],
  }));
  localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(history));
}

export function getHistory(id: string) {
  const phantomsHistory = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY) as string,
  ) as PhantomHistory[];
  return phantomsHistory?.find((history) => history.id === id);
}

export function addHistoryEvent(id: string, event: HistoryEvent) {
  const phantomsHistory = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY) as string,
  ) as PhantomHistory[];
  const newHistory = phantomsHistory.map((phantomHistory) =>
    phantomHistory.id === id
      ? { ...phantomHistory, history: [...phantomHistory.history, event] }
      : phantomHistory,
  );
  localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(newHistory));
}
