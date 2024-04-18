import React, {useState} from 'react'
import './InventoryItemRow.scss'
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg'
import editIcon from '../../assets/Icons/edit-24px.svg'
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg'
import { Link } from 'react-router-dom'
import DeleteInventory from '../DeleteInventory/DeleteInventory'

function InventoryItemRow({ item }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleDelete = () => {
    setIsDeleting(prevIsDeleting => !prevIsDeleting)
  }

  let { item_name, category, warehouse_name, status, quantity, id } = item;
  return (
    <>
      {isDeleting &&
        <DeleteInventory inventoryItem={item} />
      }

      <article className='inventory-item__inventory-row'>
        <div className='inventory-item__inventory-info'>
          <div className='inventory-item__inventory-label inventory-item__inventory-label--item'>
            <span className='inventory-item__inventory-heading inventory-item__inventory-heading--item'>Inventory Item</span>
            <div className='inventory-item__value-with-chevron'>
              <Link className='inventory-item__value-with-chevron--active' to={`/inventory/${id}`}><span className='inventory-item__value inventory-item__item-value'>{item_name}</span><img className='inventory-item__chevron-icon' src={chevronIcon} alt='' /></Link>
            </div>
          </div>
          <div className='inventory-item__inventory-label inventory-item__inventory-label--category'>
            <span className='inventory-item__inventory-heading'>Category</span>
            <p className='inventory-item__value'>{category}</p>
          </div>
          <div className='inventory-item__inventory-label inventory-item__inventory-label--status'>
            <span className='inventory-item__inventory-heading'>Status</span>
            <span className={quantity === 0 ? 'inventory-item__value inventory-item__value--out-of-stock' : 'inventory-item__value inventory-item__value--instock'}>{status}</span>
          </div>
          <div className='inventory-item__inventory-label inventory-item__inventory-label--quantity'>
            <span className='inventory-item__inventory-heading'>QTY</span>
            <p className='inventory-item__value'>{quantity}</p>
          </div>
          <div className='inventory-item__inventory-label inventory-item__inventory-label--warehouse'>
            <span className='inventory-item__inventory-heading'>Warehouse</span>
            <p className='inventory-item__value'>{warehouse_name}</p>
          </div>
          <div className='inventory-item__inventory-label inventory-item__inventory-label--actions-desktop'>
            <div className='inventory-item__actions-icons' onClick={toggleDelete}><img src={deleteIcon} alt='delete icon' /></div>
            <Link className='inventory-item__actions-icons' to={`/inventory/edit/${id}`}><img src={editIcon} alt='edit icon' /></Link>
          </div>
        </div>
        <div className='inventory-item__inventory-label inventory-item__inventory-label--actions'>
          <div className='inventory-item__actions-icons' onClick={toggleDelete}><img src={deleteIcon} alt='delete icon' /></div>
          <Link className='inventory-item__actions-icons' to={`/inventory/edit/${id}`}><img src={editIcon} alt='edit icon' /></Link>
        </div>
      </article>
    </>
  )
}

export default InventoryItemRow;