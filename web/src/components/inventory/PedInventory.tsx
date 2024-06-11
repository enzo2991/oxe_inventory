import React, { useState } from 'react';
import { useAppSelector } from '../../store';
import { Inventory } from '../../typings';


const PedInventory: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
    const isBusy = useAppSelector((state) => state.inventory.isBusy);
    return (
    <>
    <div className="inventory-grid-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
        <div className='inventory-grid-container'>
            <div className='inventory-slot'>
                <div className="inventory-slot-label-box">
                    <p className='inventory-slot-label-text'>
                        test
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default PedInventory