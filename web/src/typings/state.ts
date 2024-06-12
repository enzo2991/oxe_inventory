import { Inventory, Clothing } from './inventory';
import { Slot } from './slot';

export type State = {
  leftInventory: Inventory;
  midInventory: Clothing;
  rightInventory: Inventory;
  itemAmount: number;
  shiftPressed: boolean;
  isBusy: boolean;
  additionalMetadata: Array<{ metadata: string; value: string }>;
  history?: {
    leftInventory: Inventory;
    midInventory: Clothing;
    rightInventory: Inventory;
  };
};
