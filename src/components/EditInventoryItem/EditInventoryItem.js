import axios from "axios"
import "./EditInventoryItem.scss"
import leftArrow from "../../assets/Icons/arrow_back-24px.svg"
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

function EditInventoryItem() {
    const [warehouses, setWarehouses] = useState([])
    const [item, setItem] = useState({})
    const [inStock, setInStock] = useState(true)
    const [category, setCategory] = useState("")
    const [warehouse, setWarehouse] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()

    const toggleStatus = (bool) => {
        setInStock(bool)
    }

    const prevPage = () => {
        navigate(-1)
    }

    useEffect(() => {
        const getAllWarehouses = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/api/warehouses`)
                setWarehouses(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getAllWarehouses()
    }, [])

    useEffect(() => {
        const getInventoryItem = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/api/inventories/${id}`)
                setItem(response.data)
                setCategory(response.data.category)
                setWarehouse(response.data.warehouse_id)
            } catch (error) {
                console.error(error)
            }
        }
        getInventoryItem()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const warehouse_id = e.target.warehouse.value
        const item_name = e.target.item_name.value
        const description = e.target.description.value
        const category = e.target.category.value
        const status = inStock ? "In Stock" : "Out of Stock"
        const quantity = inStock ? e.target.quantity.value : "0"

        if (!warehouse_id || !item_name || !description || !category || inStock && !quantity) {
            alert("All fields are required")
            return
        }

        const updatedItem = {
            warehouse_id: warehouse_id,
            item_name: item_name,
            description: description,
            category: category,
            status: status,
            quantity: quantity
        }

        try {
            await axios.put(`http://localhost:8082/api/inventories/${id}`, updatedItem)
        } catch (err) {
            console.error(err)
        }
        alert("Updated Inventory Item!")
        prevPage()
    }

    return (
        <main className="edit-inventory">
            <div className="edit-inventory__header">
                <img src={leftArrow} alt="go back to previous page" className="edit-inventory__prev" onClick={prevPage}/>
                <h1 className="edit-inventory__heading">Edit Inventory Item</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="edit-inventory__form">
                    <div className="edit-inventory__form-wrapper edit-inventory__form-wrapper--first">
                        <h2 className="edit-inventory__form-heading">Item Details</h2>
                        <div className="edit-inventory__form-group">
                            <div className="edit-inventory__form-item" >
                                <label className="edit-inventory__form-label" htmlFor="item_name">Item Name</label>
                                <input className="edit-inventory__form-input" type="text" name="item_name" id="item_name" defaultValue={item.item_name} />
                            </div>
                            <div className="edit-inventory__form-item" >
                                <label className="edit-inventory__form-label" htmlFor="description">Description</label>
                                <textarea name="description" id="description" className="edit-inventory__form-input edit-inventory__form-input--textarea" defaultValue={item.description}></textarea>
                            </div>
                            <div className="edit-inventory__form-item" >
                                <label className="edit-inventory__form-label" htmlFor="category">Category</label>
                                <select name="category" id="category" className="edit-inventory__form-input edit-inventory__form-input--select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Health">Health</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="edit-inventory__form-wrapper">
                        <h2 className="edit-inventory__form-heading">Item Availability</h2>
                        <div className="edit-inventory__form-group">
                            <div className="edit-inventory__form-item" >
                                <h3 className="edit-inventory__form-label">Status</h3>
                                <div className="edit-inventory__form-radio-wrapper">
                                    <div className="edit-inventory__from-radio-item">
                                        <input type="radio" id="in-stock" name="status" value="in Stock" defaultChecked onClick={() => toggleStatus(true)} />
                                        <label className="edit-inventory__form-radio-label" htmlFor="In-stock">In stock</label>
                                    </div>
                                    <div className="edit-inventory__from-radio-item">
                                        <input type="radio" id="out-of-stock" name="status" value="Out of stock" onClick={() => toggleStatus(false)} />
                                        <label className="edit-inventory__form-radio-label" htmlFor="our-of-stock">Out of stock</label>
                                    </div>
                                </div>
                            </div>
                            {inStock ?
                                <div className="edit-inventory__form-item edit-inventory__form-item--qty" >
                                    <label className="edit-inventory__form-label" htmlFor="quantity">Quantity</label>
                                    <input className="edit-inventory__form-input" type="number" name="quantity" id="quantity" defaultValue={item.quantity} />
                                </div>
                                : null}
                            <div className="edit-inventory__form-item" >
                                <label className="edit-inventory__form-label" htmlFor="category">Warehouse</label>
                                <select name="warehouse" id="warehouse" className="edit-inventory__form-input edit-inventory__form-input--select" value={warehouse} onChange={(e) => setWarehouse(e.target.value)}>
                                    {warehouses.map((warehouse) => (
                                        <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-inventory__form-actions">
                    <div onClick={prevPage} className="edit-inventory__form-button edit-inventory__form-button--cancel">Cancel</div>
                    <button type="submit" className="edit-inventory__form-button">Save</button>
                </div>
            </form>
        </main>
    )
}

export default EditInventoryItem