import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function useSearchParamFilter(
  name: string,
): [string | null, Dispatch<SetStateAction<string | null>>] {
  const searchParams = useSearchParams();
  const [searchParam, setSearchParam] = useState<string | null>(
    searchParams.get(name),
  );
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (searchParam) {
      newSearchParams.set(name, searchParam);
    } else {
      newSearchParams.delete(name);
    }
    router.push(`${pathname}/?${newSearchParams}`);
  }, [searchParam, pathname, router, name, searchParams]);

  return [searchParam, setSearchParam];
}
