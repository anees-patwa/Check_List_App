import { ChecklistItem } from "./ChecklistItem";

export interface List {
  coreId: number;
  items: ChecklistItem[];
}
