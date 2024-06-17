import { canStack, findAvailableSlot, isSlotWithItem } from '../helpers';
import { DragSource, DropTarget, SlotWithItem } from '../typings';
import { store } from '../store';
import { validateMove } from '../thunks/validateItems';
import { moveSlots, stackSlots, swapSlots } from '../store/inventory';
import { Items } from '../store/items';

export const onClothing = (source: DragSource, target: DropTarget) => {
    const { inventory: state } = store.getState();
    const sourceInventory = state.midInventory;
    const targetInventory = state.leftInventory;
  
    const sourceSlot = sourceInventory.items[source.item.slot - 1] as SlotWithItem;
    
    const sourceData = Items[sourceSlot.name];
    if (sourceData === undefined) return console.error(`${sourceSlot.name} item data undefined!`);

    const targetSlot = target
    ? targetInventory.items[target.item.slot - 1]
    : findAvailableSlot(sourceSlot, sourceData, targetInventory.items);

    if (targetSlot === undefined) return console.error('Target slot undefined!');
    
    if (targetInventory.type !== "player" || target.inventory !== "player") return console.error('Only return to your inventory')

    const count =
    state.itemAmount !== 0
      ? sourceSlot.count
        ? state.itemAmount > sourceSlot.count
          ? sourceSlot.count
          : state.itemAmount
        : state.itemAmount
      : 1;

    const data = {
        fromSlot: sourceSlot,
        toSlot: targetSlot,
        fromType: sourceInventory.type,
        toType: targetInventory.type,
        count: count,
      };

    store.dispatch(
        validateMove({
            ...data,
            fromSlot: sourceSlot.slot,
            toSlot: targetSlot.slot,
          })
      );

      isSlotWithItem(targetSlot, true)
      ? sourceData.stack && canStack(sourceSlot, targetSlot)
        ? store.dispatch(
            stackSlots({
              ...data,
              toSlot: targetSlot,
            })
          )
        : store.dispatch(
            swapSlots({
              ...data,
              toSlot: targetSlot,
            })
          )
      : store.dispatch(moveSlots(data));
}