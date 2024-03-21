import { useState } from "react";
import {
  HistoryEvent,
  addHistoryEvent as addHistoryEventAPI,
  getHistory,
} from "@/app/api/history";

export default function useHistory(id: string) {
  const [history, setHistory] = useState(getHistory(id));

  const addHistoryEvent = (historyEvent: HistoryEvent) => {
    addHistoryEventAPI(id, historyEvent);
    setHistory(getHistory(id));
  };

  return { history, addHistoryEvent };
}
