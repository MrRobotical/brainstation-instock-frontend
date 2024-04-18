import React, {useState, useEffect} from 'react'
import './WarehouseDetails.scss'
import editIcon from '../../assets/Icons/edit-24px-white.svg'
import sortIcon from '../../assets/Icons/sort-24px.svg'
import backIcon from '../../assets/Icons/arrow_back-24px.svg'
import WarehouseInventoryItem from '../WarehouseInventoryItem/WarehouseInventoryItem'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

const baseURL = "http://localhost:8082/api"

function WarehouseDetails() {
  // const {id} = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState([])

  useEffect(() => {
      const getWarehouseData = async () => {
          try {
              const response = await axios.get(`${baseURL}/warehouses/3/inventories`)
              console.log(response.data)
              setWarehouseDetails(response.data)
          } catch (error) {
              console.error(error)
          }
      }
      getWarehouseData()
  }, [])

  return (
    <main className='warehouse-details container'>
      <div className="warehouse-details__header">
        <h1 className="warehouse-details__heading"><img className='warehouse-details__back-icon' src={backIcon}/>Washington</h1>
        <div className="warehouse-details__actions">
          <button className="warehouse-details__edit-button">
            <img className='warehouse-details__edit-button-icon' src={editIcon} />
            <p className="warehouse-details__edit-button-text">Edit</p>
          </button>
        </div>
      </div>
      <div className='warehouse-details__info'>
        <article className='warehouse-details__article warehouse-details__address'>
          <span className='warehouse-details__subheading warehouse-details__address-heading'>Warehouse Address</span>
          <p className='warehouse-details__article-body warehouse-details__address-line'>Address line, <span className='warehouse-details__address-line--mobile'>Toronto, ON</span></p>
          <p className='warehouse-details__article-body warehouse-details__address-line warehouse-details__address-line--desktop' >Toronto, ON</p>
        </article>
        <div className='warehouse-details__contact'>
          <article className='warehouse-details__article warehouse-details__contact-name'>
            <span className='warehouse-details__subheading warehouse-details__contact-name-heading'>Contact Name</span>
            <p className='warehouse-details__article-body warehouse-details__contact-name-line'>Contact line</p>
            <p className='warehouse-details__article-body warehouse-details__contact-name-line'>Contact line</p>
          </article>
          <article className='warehouse-details__article warehouse-details__contact-info'>
            <span className='warehouse-details__subheading warehouse-details__contact-info-heading'>Contact Information</span>
            <p className='warehouse-details__article-body warehouse-details__contact-info-line'>Info line</p>
            <p className='warehouse-details__article-body warehouse-details__contact-info-line'>Info line</p>
          </article>
        </div>
      </div>
      {/* <div className='warehouse-details__table'>
        <div className='warehouse-details__table-headings'>
          <div className='warehouse-details__table-heading'>Inventory Item<img className='warehouse-details__sort-icon' src={sortIcon} /></div>
          <div className='warehouse-details__table-heading'>Category<img className='warehouse-details__sort-icon' src={sortIcon} /></div>
          <div className='warehouse-details__table-heading'>Status<img className='warehouse-details__sort-icon' src={sortIcon} /></div>
          <div className='warehouse-details__table-heading'>Quantity<img className='warehouse-details__sort-icon' src={sortIcon} /></div>
          <div className='warehouse-details__table-heading'>Actions<img className='warehouse-details__sort-icon' src={sortIcon} /></div>
        </div>
      </div> */}
    </main>
  )
}

export default WarehouseDetails;