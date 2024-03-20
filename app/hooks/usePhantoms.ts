import { useContext } from "react";
import { PhantomsContext } from "@/app/context/PhantomsContext";

export default function usePhantoms() {
  return useContext(PhantomsContext);
}
