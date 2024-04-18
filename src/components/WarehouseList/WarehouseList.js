import { useState, useEffect } from "react"
import axios from "axios"
import "./WarehouseList.scss"
import searchIcon from "../../assets/Icons/search-24px.svg"
import WarehouseItem from "../WarehouseItem/WarehouseItem";
import sortIcon from "../../assets/Icons/sort-24px.svg"
import Header from "../Header/Header";
import { Link } from "react-router-dom"

const baseURL = "http://localhost:8082/api"

function WarehouseList() {

    const [warehouses, setWarehouses] = useState([])

    useEffect(() => {
        const getAllWarehouses = async () => {
            try {
                const response = await axios.get(`${baseURL}/warehouses`)
                setWarehouses(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getAllWarehouses()
    }, [])

    return (
        <main className="warehouses container">

            <div className="warehouses__header">
                <h1 className="warehouses__heading">Warehouses</h1>
                <div className="warehouses__actions">
                    <div className="warehouses__search-bar">
                        <input className="warehouses__search-bar-input" type="text" placeholder="Search..." />
                        <img className="warehouses__search-bar-icon" src={searchIcon} alt="search icon" />
                    </div>
                    <Link to="/warehouse/addwarehouse/" className="warehouses__add-button">
                        <p className="warehouses__add-button-text">+ Add New Warehouse</p>
                    </Link>
                </div>
            </div>
            <div>
                <div className="warehouses__list-headings-wrapper">
                    <div className="warehouses__list-heading">
                        <p>Warehouse</p>
                        <img className="warehouses__list-heading-icon" src={sortIcon}/>
                    </div>
                    <div className="warehouses__list-heading">
                        <p>Address</p>
                        <img className="warehouses__list-heading-icon" src={sortIcon}/>
                    </div>
                    <div className="warehouses__list-heading">
                        <p>Contact Name</p>
                        <img className="warehouses__list-heading-icon" src={sortIcon}/>
                    </div>
                    <div className="warehouses__list-heading">
                        <p>Contact Information</p>
                        <img className="warehouses__list-heading-icon" src={sortIcon}/>
                    </div>
                    <div className="warehouses__list-heading">
                        <p>Actions</p>
                    </div>
                </div>
                <ul className="warehouses__list">
                    {warehouses.map((warehouse) => (
                        <WarehouseItem key={warehouse.id} warehouse={warehouse} />
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default WarehouseList