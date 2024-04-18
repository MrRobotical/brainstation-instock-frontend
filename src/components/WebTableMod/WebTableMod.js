import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WebTableMod.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import arrow from "../../assets/Icons/chevron_right-24px.svg"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import DeleteInventory from "../DeleteInventory/DeleteInventory";


function WebTableMod() {

  const { id: warehouseID } = useParams();

  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const inventories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/warehouses/${warehouseID}/inventories`
        );
        setInventories(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };
    inventories();
    
  }, []);
  const navigate = useNavigate();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [selectedInventoryId, setSelectedInventoryId] = useState(null);

  const handleinventoryNavigate=(inventoryId)=>{
    navigate(`/inventory/${inventoryId}`)
  };
  const handleEdit =(inventoryId)=>{
    navigate(`/inventory/edit/${inventoryId}`)
 
  };

  const handleDelete = (inventoryId) => {
    setShowDeleteAlert(true);
    setSelectedInventoryId(inventoryId);
   
    
  };


  return (
    <div>
    <table className="table">
      <thead className="table__head">
        <tr>
          <th className="table__title">
            <p className="table__heading">Inventory Item</p>
            <img alt="Sort out icon this icon will sort the table" className="table__heading-icon" src={sortIcon} />
          </th>
          <th className="table__title">
            <p className="table__heading">Category</p>
            <img alt="Sort out icon this icon will sort the table" className="table__heading-icon" src={sortIcon} />
          </th>
          <th className="table__title">
            <p className="table__heading">Status</p>
            <img alt="Sort out icon this icon will sort the table" className="table__heading-icon" src={sortIcon} />
          </th>
          <th className="table__title">
            <p className="table__heading">Quantity</p>
            <img alt="Sort out icon this icon will sort the table" className="table__heading-icon" src={sortIcon} />
          </th>
          <th className="table__title">
            <p className="table__heading">Actions</p>
            <img alt="Sort out icon this icon will sort the table" className="table__heading-icon" src={sortIcon} />
          </th>
        </tr>
      </thead>
      <tbody className="table__body">
        {inventories.length > 0 ? (
          inventories.map((inventory) => (
            <tr className="table__body-title" key={inventory.inventory_id}>
              <td onClick={() => handleinventoryNavigate(inventory.inventory_id)} className="table__info">
               <p className="table__info-name"> {inventory.item_name}</p> 
                <img alt="arrow icon this arrow icon will take you to information of the item" className="table__info-image" src={arrow}/>
              </td>
              <td className="table__info">{inventory.category}</td>
              <td className='table__info'>
                <p className={`table__info ${inventory.status === 'Out of Stock' ? 'table__info--instock' : 'table__info--outstock'}`}>{inventory.status}</p></td>
              <td className="table__info">{inventory.quantity}</td>
              <td className="table__info">
                <img alt="Delete a inventory icon this icon will delete the respective item"  onClick={() => handleDelete(inventory)} className="table__action-icon" src={deleteIcon} />
                <img alt="edit a inventory icon this icon will edit the respective item" onClick={() => handleEdit(inventory.inventory_id)} className="table__action-icon" src={editIcon} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No inventories Available in this warehouse</td>
          </tr>
        )}
      </tbody>
    </table>
    {showDeleteAlert && (
          <DeleteInventory
          inventoryItem={selectedInventoryId} 
          />
        )}
    </div>
  );
}

export default WebTableMod;
