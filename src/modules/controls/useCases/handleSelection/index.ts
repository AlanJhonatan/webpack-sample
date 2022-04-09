import { HandleSelectionClear } from "./HandleSelectionClear.ts";
import { HandleSelectionCreated } from "./HandleSelectionCreated";
import { HandleSelectionUpdated } from "./HandleSelectionUpdated";

const handleSelectionCreated = new HandleSelectionCreated();
const handleSelectionClear = new HandleSelectionClear();
const handleSelectionUpdated = new HandleSelectionUpdated();

export {
  handleSelectionCreated,
  handleSelectionClear,
  handleSelectionUpdated
};
