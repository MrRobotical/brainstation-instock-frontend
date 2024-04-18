import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MobileTable.scss";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteInventory from "../DeleteInventory/DeleteInventory";

function MobileTable() {
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

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedInventoryId, setSelectedInventoryId] = useState(null);

  const handleinventoryNavigate = (inventoryId) => {
    navigate(`/inventory/${inventoryId}`);
  };
  const handleEdit = (inventoryId) => {
    navigate(`/inventory/edit/${inventoryId}`);

  };

  const handleDelete = (inventoryId) => {
    setShowDeleteAlert(true);
    setSelectedInventoryId(inventoryId);
    
  };
  return (
    <div className="main-mobile">
      {inventories.length > 0 ? (
        inventories.map((inventory) => (
          <section
            className="main-mobile__first-sec"
            key={inventory.inventory_id}
          >
            <section className=" main-mobile__info">
              <div className="main-mobile__cat-name">
                <div className="main-mobile__name-info">
                  <h3 className="main-mobile__item-heading">Inventory Item</h3>
                  <div
                    onClick={() =>
                      handleinventoryNavigate(inventory.inventory_id)
                    }
                    className="main-mobile__name-attribute"
                  >
                    <p className="main-mobile__name">{inventory.item_name}</p>
                    <img
                      alt="arrow icon this arrow icon will take you to information of the item"
                      className="main-mobile__name-image"
                      src={arrow}
                    />
                  </div>
                </div>
                <div className="man-mobile__cat-info">
                  <h3 className="main-mobile__item-heading">Category</h3>
                  <p className="main-mobile__category-name">
                    {inventory.category}
                  </p>
                </div>
              </div>
              <div className="main-mobile__stat-QTY">
                <div className="main-mobile__status">
                  <h3 className="main-mobile__item-heading">Status</h3>
                  <p
                    className={`main-mobile__status-info ${
                      inventory.status === "Out of Stock"
                        ? "main-mobile__status-info--out"
                        : "main-mobile__status-info--in"
                    }`}
                  >
                    {inventory.status}
                  </p>
                </div>
                <div>
                  <h3 className="main-mobile__item-heading">QTY</h3>
                  <p className="main-mobile__category-name">
                    {inventory.quantity}
                  </p>
                </div>
              </div>
            </section>
            <div className="main-mobile__action">
              <img
                alt="Delete a inventory icon this icon will delete the respective item"
                onClick={() => handleDelete(inventory)}
                className="main-mobile__action-icon"
                src={deleteIcon}
              />

              <img
                alt="edit a inventory icon this icon will edit the respective item"
                onClick={() => handleEdit(inventory.inventory_id)}
                className="main-mobile__action-icon"
                src={editIcon}
              />
            </div>
          </section>
        ))
      ) : (
        <p>No inventories Available in this warehouse</p>
      )}
      {showDeleteAlert && (
        <DeleteInventory
          inventoryItem={selectedInventoryId}
        />
      )}
    </div>
  );
}

export default MobileTable;
