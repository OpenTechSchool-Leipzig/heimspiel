import { Categories, CatItem } from "@/types";

export function getCatArray(): Array<CatItem> {
  const list: Array<CatItem> = [];
  let id = 1;
  for (const e in Categories) {
    if (isNaN(Number(e))) {
      list.push({
        name: e,
        id: id
      });
      id++;
    }
  }
  return list;
}
