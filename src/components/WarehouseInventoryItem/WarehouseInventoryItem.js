import React from 'react'
import './WarehouseInventoryItem.scss'
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg'
import editIcon from '../../assets/Icons/edit-24px.svg'

function WarehouseInventoryItem(/*{warehouseDetails}*/) {
  console.log(/*warehouseDetails*/)
  // const {item_name, category, status, quantity} = warehouseDetails;

  return (
    <article className='warehouse-details__inventory-row'>
      <div className='warehouse-details__inventory-row'>
        <div className='warehouse-details__inventory-label warehouse-details__inventory-label--item'>
          <span className='warehouse-details__inventory-heading'>Inventory Item</span>
          <p className='warehouse-details__inventory-value'>Test {/*warehouseDetails[0].item_name*/}</p>
        </div>
        <div className='warehouse-details__inventory-label warehouse-details__inventory-label--category'>
          <span className='warehouse-details__inventory-heading'>Category</span>
          <p className='warehouse-details__inventory-value'>Test{/*warehouseDetails[0].category*/}</p>
        </div>
        <div className='warehouse-details__inventory-label warehouse-details__inventory-label--status'>
          <span className='warehouse-details__inventory-heading'>Status</span>
          <p className='warehouse-details__inventory-value'>Test {/*warehouseDetails[0].status*/}</p>
        </div>
        <div className='warehouse-details__inventory-label warehouse-details__inventory-label--quantity'>
          <span className='warehouse-details__inventory-heading'>Quantity</span>
          <p className='warehouse-details__inventory-value'>Test{/*warehouseDetails[0].quantity*/}</p>
        </div>
      </div>
      <div className='warehouse-details__inventory-label warehouse-details__inventory-label--actions'>
        <div className='warehouse-details__actions-icons'><img src={deleteIcon} alt='delete icon' /></div>
        <div className='warehouse-details__actions-icons'><img src={editIcon} alt='edit icon' /></div>
      </div>
    </article>
  )
}

export default WarehouseInventoryItem;