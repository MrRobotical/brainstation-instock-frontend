import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WarehouseInfo.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-white.svg";
import { Link, useParams } from "react-router-dom";

function InvetoryList() {
  const { id: warehouseID } = useParams();

  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const inventories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/warehouses/${warehouseID}`
        );
        setInventories(response.data);
          
      } catch (error) {
        console.error(error);
      }
    };
    inventories();
  }, []);

  return (
    <main className="main">
      <section className="main__first-sec">
        <section className="main__header">
          <div className="main__main-name">
            <Link to={"/"}>
              <img alt="back icon to take back to the warehouse table" className="main__header-image" src={backIcon} />
            </Link>

            <h1 className="main__header-title">
              {inventories.warehouse_name}
            </h1>
          </div>
          <Link to={`/warehouse/edit/${warehouseID}`}>
            <button className="main__header-button">
              <img alt="edit icon for the button" className="main__button-image" src={editIcon} />
              <p className="main__button-para">Edit</p>
            </button>
          </Link>
        </section>
        <section className="main__contacts">
          <div className="main__address">
            <h3 className="main__info-heading">Warehouse Address:</h3>
            <p className="main__info-details">{inventories.address}</p>
          </div>
          <div className="main__info">
            <div className="main__person">
              <h3 className="main__info-heading">Contact Name:</h3>
              <p className="main__info-details">{inventories.contact_name}</p>
              <p className="main__info-details">{ inventories.contact_position}</p>
            </div>
            <div className="main__details">
              <h3 className="main__info-heading">Contact Information:</h3>
              <p className="main__info-details">{ inventories.contact_phone}</p>
              <p className="main__info-details">{ inventories.contact_email}</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default InvetoryList;
