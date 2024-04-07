import { Fish } from "@/classes/Fish";
import Cory from "@/components/svg/Corry";
import Guppy from "@/components/svg/Guppy";
import Molly from "@/components/svg/Molly";
export abstract class StorageNames {
  static readonly UID = "uid";
}

export const Fishes: Record<string, Fish> = {
  guppy: { name: "Guppy", image: Guppy() } as Fish,
  cory: { name: "Cory Catfish", image: Cory() } as Fish,
  molly: { name: "Molly", image: Molly() } as Fish,
};

export const Colors = {
  darker_blue: "#70BDF2",
};
