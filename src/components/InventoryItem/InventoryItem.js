import React, { useState, useEffect } from 'react'
import './InventoryItem.scss'
import sortIcon from '../../assets/Icons/sort-24px.svg'
import axios from 'axios'
import InventoryItemRow from '../InventoryItemRow/InventoryItemRow'

const baseURL = "http://localhost:8082/api"

function InventoryItem() {
  const [inventories, setInventories] = useState([])
  useEffect(() => {
    const getAllInventories = async () => {
      try {
        const response = await axios.get(`${baseURL}/inventories`)
        setInventories(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getAllInventories()
  }, [])

  while (!inventories) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className='inventory__header'>
        <div className='inventory__header-headings'>
          <div className='inventory__header-heading-with-icon--item'>
            <span className='inventory__header-heading inventory__header-heading--item'>Inventory Item</span><img className='inventory__header-sort' src={sortIcon} />
          </div>
          <div className='inventory__header-heading-with-icon--category'>
            <span className='inventory__header-heading inventory__header-heading-with-icon'>Category</span><img className='inventory__header-sort' src={sortIcon} />
          </div>
          <div className='inventory__header-heading-with-icon--status'>
            <span className='inventory__header-heading inventory__header-heading-with-icon'>Status</span><img className='inventory__header-sort' src={sortIcon} />
          </div>
          <div className='inventory__header-heading-with-icon--quantity'>
            <span className='inventory__header-heading inventory__header-heading-with-icon'>QTY</span><img className='inventory__header-sort' src={sortIcon} />
          </div>
          <div className='inventory__header-heading-with-icon--warehouse'>
            <span className='inventory__header-heading inventory__header-heading-with-icon'>Warehouse</span><img className='inventory__header-sort' src={sortIcon} />
          </div>
          <div className='inventory__header-heading-with-icon--actions'>
            <span className='inventory__header-heading inventory__header-heading-with-icon'>Actions</span>
          </div>
        </div>
      </div>
      {inventories.map((item) => {
        return <InventoryItemRow key={item.id} item={item}/>
      })}
    </>
  )
}

export default InventoryItem;