import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store';
import { Clothing } from '../../typings';
import { useIntersection } from '../../hooks/useIntersection';

interface SlotProps {
    inventoryId: Clothing['id'];
    inventoryType: Clothing['type'];
    items?: Clothing['label']
  }

const InventorySlotPed: React.ForwardRefRenderFunction<HTMLDivElement, SlotProps> = () => {
    return (
    <>
    </>
    )
}

const InventoryPed: React.FC<{ inventory: Clothing }> = ({ inventory }) => {
    const isBusy = useAppSelector((state) => state.inventory.isBusy);
    console.log(inventory)
    return (
    <>
    <div className="midinventory-grid-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
        <div>
            <div className='midinventory-grid-container'>
            <div className='inventory-slot'>
                    <div className='item-slot-wrapper'>
                        <div className='item-slot-header-wrapper'>
                            <div className='item-slot-info-wrapper'>
                                <p></p>
                            </div>
                        </div>
                        <div className="inventory-slot-label-box">
                            <p className='inventory-slot-label-text'>
                                Test
                            </p>
                        </div>
                    </div>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
            </div>
        </div>
        <div>
        <div className='midinventory-grid-container'>
        <div className='inventory-slot'>
                    <div className='item-slot-wrapper'>
                        <div className='item-slot-header-wrapper'>
                            <div className='item-slot-info-wrapper'>
                                <p>100g</p>
                            </div>
                        </div>
                        <div className="inventory-slot-label-box">
                            <p className='inventory-slot-label-text'>
                                Test
                            </p>
                        </div>
                    </div>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
                <div className='inventory-slot'>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default InventoryPed