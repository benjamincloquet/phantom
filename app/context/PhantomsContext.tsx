"use client";

import {
  useState,
  useCallback,
  useEffect,
  useReducer,
  createContext,
} from "react";
import { IPhantoms } from "@/phantoms";
import { getPhantoms } from "@/app/api/phantoms";

type Action =
  | {
      type: "set";
      payload: IPhantoms;
    }
  | {
      type: "delete";
      payload: string;
    }
  | {
      type: "duplicate";
      payload: IPhantoms[number];
    };

export const PhantomsContext = createContext({
  phantoms: [] as IPhantoms,
  isLoading: false,
  hasReachedPhantomsLimit: false,
  reloadPhantoms: () => {},
});

const LOCAL_STORAGE_KEY = "phantoms";

const setCachedData = (value: IPhantoms) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
};

const reducer = (state: IPhantoms, action: Action) => {
  switch (action.type) {
    case "set":
      setCachedData(action.payload);
      return [...action.payload];
    case "delete":
      return state.filter((phantom) => phantom.id === action.payload);
    case "duplicate":
      return [...state, action.payload];
  }
};

export default function PhantomsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phantoms, dispatch] = useReducer(reducer, [] as IPhantoms);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhantomsFromAPI = useCallback(async () => {
    try {
      setIsLoading(true);
      const phantoms = await getPhantoms();
      dispatch({ type: "set", payload: phantoms });
    } catch (e: unknown) {
      // error handling
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadPhantoms = useCallback(() => {
    if (isLoading) return;
    const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cachedData) {
      dispatch({ type: "set", payload: JSON.parse(cachedData) as IPhantoms });
    } else {
      fetchPhantomsFromAPI();
    }
  }, [fetchPhantomsFromAPI, isLoading]);

  useEffect(() => {
    loadPhantoms();
  }, [loadPhantoms]);

  const reloadPhantoms = () => {
    dispatch({ type: "set", payload: [] });
    loadPhantoms();
  };

  const hasReachedPhantomsLimit = phantoms.length === 5;

  return (
    <PhantomsContext.Provider
      value={{ phantoms, isLoading, reloadPhantoms, hasReachedPhantomsLimit }}
    >
      {children}
    </PhantomsContext.Provider>
  );
}
