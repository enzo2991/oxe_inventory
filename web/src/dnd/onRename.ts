import { store } from '../store';
import { fetchNui } from '../utils/fetchNui';
import { Slot } from '../typings';

export const onRename = (item: Slot) => {
  const {
    inventory: { itemAmount },
  } = store.getState();
  fetchNui('useRename', {slot: item.slot, count: itemAmount});
};
