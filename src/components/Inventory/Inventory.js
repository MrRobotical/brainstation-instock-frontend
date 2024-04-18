import React from 'react'
import './Inventory.scss'
import editIcon from '../../assets/Icons/edit-24px-white.svg'
import sortIcon from '../../assets/Icons/sort-24px.svg'
import InventoryItem from '../InventoryItem/InventoryItem'
import { Link } from 'react-router-dom'

function Inventory() {
  return (
    <main className='inventory-list container'>
      <div className="inventory-list__header">
        <h1 className="inventory-list__heading">Inventory</h1>
        <div className="inventory-list__actions">
          <input type="text" name='search' className='inventory-list__search-bar' placeholder='Search...' />
          <Link className='inventory-list__add-button' to='/inventory/addinventory/'>
            <p className="inventory-list__add-button-text">+ Add New Item</p>
          </Link>
        </div>
      </div>
      <InventoryItem />
    </main>
  )
}

export default Inventory;