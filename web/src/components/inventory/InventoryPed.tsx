import React, { useRef } from 'react';
import { useAppSelector } from '../../store';
import { Inventory } from '../../typings'
import InventorySlot from './InventorySlot';

const InventoryPed: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
    const isBusy = useAppSelector((state) => state.inventory.isBusy);
    const ref = useRef<HTMLDivElement>(null);
    console.log(inventory)
    return (
    <>
        <div className="midinventory-grid-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
            <div>
                <div className='midinventory-grid-container'>
                    {inventory.items.slice(0,6).map((item, index) => (
                        <InventorySlot
                            key={`${inventory.type}-${inventory.id}-${item.slot}`}
                            ref={index === 7 ? ref : null}
                            item={item}
                            inventoryId={inventory.id}
                            inventoryType={inventory.type}
                            inventoryGroups={inventory.groups}
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className='midinventory-grid-container'>
                    {inventory.items.map((slot) => (
                        <InventorySlot
                            key={slot.slot}
                            item={slot}
                            inventoryId={inventory.id}
                            inventoryType={inventory.type}
                            inventoryGroups={inventory.groups}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
    )
}

export default InventoryPed