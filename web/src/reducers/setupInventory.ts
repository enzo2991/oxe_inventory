import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { getItemData, itemDurability } from '../helpers';
import { Items } from '../store/items';
import { Inventory, State } from '../typings';

export const setupInventoryReducer: CaseReducer<
  State,
  PayloadAction<{
    leftInventory?: Inventory;
    midInventory?: Inventory;
    rightInventory?: Inventory;
  }>
> = (state, action) => {
  const { leftInventory, midInventory, rightInventory } = action.payload;
  const curTime = Math.floor(Date.now() / 1000);
  const itemNames = ['shirt', 'pants', 'hat', 'shoes', 'gloves', 'scarf', 'belt', 'jacket', 'socks', 'tie', 'watch', 'ring'];

  if (leftInventory)
    state.leftInventory = {
      ...leftInventory,
      items: Array.from(Array(leftInventory.slots), (_, index) => {
        const item = Object.values(leftInventory.items).find((item) => item?.slot === index + 1) || {
          slot: index + 1,
        };

        if (!item.name) return item;

        if (typeof Items[item.name] === 'undefined') {
          getItemData(item.name);
        }

        item.durability = itemDurability(item.metadata, curTime);
        return item;
      }),
    };

  if (rightInventory)
    state.rightInventory = {
      ...rightInventory,
      items: Array.from(Array(rightInventory.slots), (_, index) => {
        const item = Object.values(rightInventory.items).find((item) => item?.slot === index + 1) || {
          slot: index + 1,
        };

        if (!item.name) return item;

        if (typeof Items[item.name] === 'undefined') {
          getItemData(item.name);
        }

        item.durability = itemDurability(item.metadata, curTime);
        return item;
      }),
    };

    if (midInventory)
      state.midInventory = {
        ...midInventory, 
        items: Array.from({ length: 12 }, (_, index) => {
          const item = Object.values(midInventory.items).find((item) => item?.slot === index + 1) || {
            slot: index + 1,
            name: itemNames[index]
          };

          if (!item.name) return item;

          if (!itemNames.includes(item.name)) {
            console.error(`Invalid item name: ${item.name}`);
            return item;
        }

          if (typeof Items[item.name] === 'undefined') {
            getItemData(item.name);
          }

          return item;
        })
    };

  state.shiftPressed = false;
  state.isBusy = false;
};
