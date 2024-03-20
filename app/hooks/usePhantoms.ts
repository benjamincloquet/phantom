import { useState, useCallback } from "react";
import { IPhantoms } from "@/phantoms";
import { getPhantoms } from "@/app/api/phantoms";

export default function usePhantoms() {
  const [phantoms, setPhantoms] = useState<IPhantoms>([] as IPhantoms);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(async () => {
    try {
      setIsLoading(true);
      const phantoms = await getPhantoms();
      setPhantoms(phantoms);
    } catch (e: unknown) {
      // error handling
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { phantoms, execute, isLoading };
}
