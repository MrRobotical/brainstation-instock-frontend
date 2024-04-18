import './ItemDetails.scss'

import React, { useState, useEffect } from 'react'
import backIcon from '../../assets/Icons/arrow_back-24px.svg'
import editIcon from '../../assets/Icons//edit-24px-white.svg'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

function ItemDetails() {
    const [item, setitem] = useState([])
    const [warehouse, setWarehouse] = useState(0)

    const { id } = useParams()
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8082/api/inventories/' + id
                );
                setitem(response.data);

                const responseWarehouse = await axios.get(
                    'http://localhost:8082/api/warehouses/' + response.data.warehouse_id
                );
                setWarehouse(responseWarehouse.data.warehouse_name)


            } catch (error) {
                console.error('Failed to fetch warehouses', error);
            }
        };

        fetchItem();

    }, []);
    return (
        <section className='item-details'>
            <section className='item-details__background'>
                <section className='item-details__title-area'>
                    <section className='item-details__title-section'>
                        <Link className='item-details__back-button' to={`/inventory`}><img src={backIcon} alt='back icon' /></Link>
                        <h1 className='item-details__main-title'> {item.item_name}</h1>
                    </section>
                    <section className='item-details__edit-icon-background'>
                        <Link className='item-details__actions-icons' to={`/inventory/edit/${id}`}><p className='item-details__edit-button'>Edit</p><img className='item-details__actions-icons-image' src={editIcon} alt='edit icon' /></Link>
                    </section>

                </section>
                <section className='item-details__bottom-section'>
                    <section className='item-details__section'>
                        <section className='item-details__info-section'>
                            <h2 className='item-details__title'>ITEM DESCRIPTION:</h2>
                            <p className='item-details__information'>{item.description} </p>
                        </section>
                        <section className='item-details__info-section'>
                            <h2 className='item-details__title'>CATEGORY:</h2>
                            <p className='item-details__information'>{item.category}</p>
                        </section>
                    </section >

                    <section className='item-details__section-border'>
                        <section className='item-details__status-section-border'>
                            <section className='item-details__info-section'>
                                <h2 className='item-details__title'>Status</h2>
                                <span className={item.quantity === 0 ? 'item-details__value item-details__value--out-of-stock' : 'item-details__value item-details__value--instock'}>{item.status}</span>
                            </section>
                            <section className='item-details__info-section'>
                                <h2 className='item-details__title'>QUANTITY:</h2>
                                <p className='item-details__information'>{item.quantity}</p>
                            </section>
                        </section>
                        <section className='item-details__info-section'>
                            <h2 className='item-details__title'>WAREHOUSE:</h2>
                            <p className='item-details__information'>{warehouse}</p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ItemDetails;