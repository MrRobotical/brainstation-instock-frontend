import "./WarehouseItem.scss"
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg"
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";

function WarehouseItem({ warehouse }) {

    const [isDeleting, setIsDeleting] = useState(false)

    const toggleDelete = () => {
        setIsDeleting(prevIsDeleting => !prevIsDeleting)
    }

    return (
        <>
            {isDeleting &&
                <DeleteWarehouse warehouseItem={warehouse} />
            }
            <li className="warehouses__list-item">
                <div className="warehouse__item-info-wrapper warehouse__item-info-wrapper--desktop">
                    <div className="warehouse__item-info">
                        <p className="warehouse__item-heading">Warehouse</p>
                        <Link to={`/warehouse/${warehouse.id}`} className="warehouse__item-link">
                            <p className="warehouse__item-text warehouse__item-text--link">{warehouse.warehouse_name}</p>
                            <img className="warehouse__item-icon" src={chevronIcon} />
                        </Link>
                    </div>
                    <div className="warehouse__item-info">
                        <p className="warehouse__item-heading">Address</p>
                        <div>
                            <p className="warehouse__item-text">{warehouse.address}</p>
                        </div>
                    </div>
                    <div className="warehouse__item-info">
                        <p className="warehouse__item-heading">Contact Name</p>
                        <div>
                            <p className="warehouse__item-text">{warehouse.contact_name}</p>
                        </div>
                    </div>
                    <div className="warehouse__item-info">
                        <p className="warehouse__item-heading">Contact Information</p>
                        <div>
                            <p className="warehouse__item-text">{warehouse.contact_phone}</p>
                            <p className="warehouse__item-text warehouse__item-text--email">{warehouse.contact_email}</p>
                        </div>
                    </div>
                </div>


                <div className="warehouse__item-info-wrapper">
                    <div className="warehouse__item-flex-items">
                        <div className="warehouse__item-info">
                            <p className="warehouse__item-heading">Warehouse</p>
                            <Link to={`/warehouse/${warehouse.id}`} className="warehouse__item-link">
                                <p className="warehouse__item-text warehouse__item-text--link">{warehouse.warehouse_name}</p>
                                <img className="warehouse__item-icon" src={chevronIcon} />
                            </Link>
                        </div>
                        <div className="warehouse__item-info">
                            <p className="warehouse__item-heading">Address</p>
                            <div>
                                <p className="warehouse__item-text">{warehouse.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="warehouse__item-flex-items">
                        <div className="warehouse__item-info">
                            <p className="warehouse__item-heading">Contact Name</p>
                            <div>
                                <p className="warehouse__item-text">{warehouse.contact_name}</p>
                            </div>
                        </div>
                        <div className="warehouse__item-info">
                            <p className="warehouse__item-heading">Contact Information</p>
                            <div>
                                <p className="warehouse__item-text">{warehouse.contact_phone}</p>
                                <p className="warehouse__item-text">{warehouse.contact_email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="warehouse__item-actions">
                    <img className="warehouse__item-action-icon" src={deleteIcon} onClick={toggleDelete} alt={`delete warehouse ${warehouse.id}`} />
                    <Link className="warehouse__item-action-icon warehouse__item-action-icon--link" to={`/warehouse/edit/${warehouse.id}`}>
                        <img className="warehouse__item-action-icon" src={editIcon} alt={`edit warehouse ${warehouse.id}`} />
                    </Link>
                </div>
            </li>
        </>
    )
}

export default WarehouseItem