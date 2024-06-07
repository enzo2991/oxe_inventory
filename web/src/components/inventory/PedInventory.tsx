import React, { useState } from 'react';
import { fetchNui } from '../../utils/fetchNui';
import { Locale } from '../../store/locale';

const PedInventory: React.FC = () => {


    return (
        <>
        <div className='inventory-button-clothes'>
            <div className='inventory-button-clothes-top'>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('selectClothing','glasses')}>
                    👓
                </button>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('selectClothing','ear')}>
                    👂
                </button>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('selectClothing','hat')}>
                    🎩
                </button>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('selectClothing','mask')}>
                    🎭
                </button>
            </div>
            <div className='inventory-button-clothes-categorie'>
                <div className='inventory-button-clothes-categorie-col'>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','shirt')}>
                        👕
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','jewelry')}>
                        💎
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','gloves')}>
                        🧤
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','pants')}>
                    👖
                    </button>
                </div>
                <div className='inventory-button-clothes-categorie-col'>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','vest')}>
                        🦺
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','watch')}>
                        ⌚
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','bag')}>
                        🎒
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('selectClothing','shoes')}>
                        👟
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PedInventory