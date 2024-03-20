import { IPhantoms } from "@/phantoms";
import phantoms from "@/phantoms.json";

const API_DELAY = 1000;

export function getPhantoms() {
  return new Promise<IPhantoms>((resolve) => {
    setTimeout(() => {
      resolve(phantoms as IPhantoms);
    }, API_DELAY);
  });
}
