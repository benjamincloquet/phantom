"use client";

import {
  useState,
  useCallback,
  useEffect,
  useReducer,
  createContext,
  Dispatch,
} from "react";
import { IPhantoms } from "@/phantoms";
import { getPhantoms } from "@/app/api/phantoms";
import { createHistory, clearHistory } from "@/app/api/history";

const LOCAL_STORAGE_PHANTOMS_KEY = "phantoms";
const MAX_PHANTOMS = 5;

type Action =
  | { type: "set"; payload: IPhantoms }
  | { type: "delete"; payload: string }
  | { type: "duplicate"; payload: IPhantoms[number] }
  | { type: "rename"; payload: { id: string; name: string } };

type Context = {
  phantoms: IPhantoms;
  isLoading: boolean;
  hasReachedPhantomsLimit: boolean;
  reloadPhantoms: () => void;
  maxPhantoms: number;
  dispatch: Dispatch<Action>;
};

const DEFAULT_STATE: Context = {
  phantoms: [] as IPhantoms,
  isLoading: false,
  hasReachedPhantomsLimit: false,
  maxPhantoms: MAX_PHANTOMS,
  reloadPhantoms: () => {},
  dispatch: () => {},
};

export const PhantomsContext = createContext(DEFAULT_STATE);

const setCachedData = (value: IPhantoms | null) => {
  if (value) {
    localStorage.setItem(LOCAL_STORAGE_PHANTOMS_KEY, JSON.stringify(value));
  } else {
    localStorage.removeItem(LOCAL_STORAGE_PHANTOMS_KEY);
    clearHistory();
  }
};

const reducer = (state: IPhantoms, action: Action) => {
  let newState = [] as IPhantoms;
  switch (action.type) {
    case "set":
      newState = [...action.payload];
      break;
    case "delete":
      newState = state.filter((phantom) => phantom.id !== action.payload);
      break;
    case "duplicate":
      newState = [...state, action.payload];
      break;
    case "rename":
      newState = state.map((phantom) =>
        phantom.id === action.payload.id
          ? { ...phantom, name: action.payload.name }
          : phantom,
      );
      break;
  }
  setCachedData(newState);
  return newState;
};

export default function PhantomsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phantoms, dispatch] = useReducer(reducer, [] as IPhantoms);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPhantomsFromAPIAndCreateHistory = useCallback(async () => {
    const phantoms = await getPhantoms();
    dispatch({ type: "set", payload: phantoms });
    createHistory(phantoms);
  }, []);

  const loadPhantoms = useCallback(async () => {
    setIsLoading(true);
    try {
      const cachedData = localStorage.getItem(LOCAL_STORAGE_PHANTOMS_KEY);
      if (cachedData) {
        dispatch({ type: "set", payload: JSON.parse(cachedData) as IPhantoms });
      } else {
        await fetchPhantomsFromAPIAndCreateHistory();
      }
    } catch (e: unknown) {
      // error handling
    } finally {
      setIsLoading(false);
    }
  }, [fetchPhantomsFromAPIAndCreateHistory]);

  useEffect(() => {
    loadPhantoms();
  }, [loadPhantoms]);

  const reloadPhantoms = () => {
    setCachedData(null);
    loadPhantoms();
  };

  const hasReachedPhantomsLimit = phantoms.length === MAX_PHANTOMS;

  return (
    <PhantomsContext.Provider
      value={
        {
          ...DEFAULT_STATE,
          phantoms,
          isLoading,
          hasReachedPhantomsLimit,
          reloadPhantoms,
          dispatch,
        } as Context
      }
    >
      {children}
    </PhantomsContext.Provider>
  );
}
