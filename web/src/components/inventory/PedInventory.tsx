import React, { useState } from 'react';
import { fetchNui } from '../../utils/fetchNui';
import { Locale } from '../../store/locale';

const PedInventory: React.FC = () => {


    return (
        <>
        <div className='inventory-button-clothes'>
            <div className='inventory-button-clothes-top'>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('exit')}>
                    👓
                </button>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('exit')}>
                    🎩
                </button>
                <button className="inventory-button-clothes-button inventory-button-clothes-hat" onClick={() => fetchNui('exit')}>
                    🎭
                </button>
            </div>
            <div className='inventory-button-clothes-categorie'>
                <div className='inventory-button-clothes-categorie-col'>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        👕
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        💎
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        🧤
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                    👖
                    </button>
                </div>
                <div className='inventory-button-clothes-categorie-col'>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        🦺
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        ⌚
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        🎒
                    </button>
                    <button className="inventory-button-clothes-button" onClick={() => fetchNui('exit')}>
                        👟
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PedInventory