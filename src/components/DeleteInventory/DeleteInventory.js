import './DeleteInventory.scss'
import backImage from '../../assets/Icons/close-24px.svg';
import { useState,useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function DeleteInventory(props){
    let id = props.inventoryItem.id
    console.log(id)
    console.log()
    if(id == undefined){
        id=props.inventoryItem.inventory_id
    }
    const navigate = useNavigate()

    const [triggerNav, setNav] = useState(0)

    useEffect(() =>{
        if(triggerNav === 1){
                navigate(-1)
                window.location.reload();

            }
    },[triggerNav]);
        
    const baseURL = "http://localhost:8082/api"
    const deleteOnClick = async () => {
        try {
            
            await axios.delete(`${baseURL}/inventories/${id}`)
            goBack()
            } catch (error) {
            console.error(error)
        }
    }
    const goBack = () => {
        setNav(1)
    }
    return (

        <section className='modal'>
            <section className='modal__background'>
            <section className='modal__back-button-area'>
                <img onClick ={goBack} className='modal__back-button' alt="back-button" src={backImage}></img>
                </section>
            <section className='modal__content-area'>
         
       
                <h1 className='modal__title'>Delete {props.inventoryItem.item_name} inventory item?</h1>
                <p className='modal__content'> Please confirm that you'd like to delete the {props.inventoryItem.item_name} from the list. You won't be able to undo this action.</p>
            </section>

            <section className='modal__buttons'>
                <button onClick ={goBack} className='modal__cancel-button'>Cancel</button>
                <button className='modal__delete-button' type='submit' onClick={deleteOnClick}>Delete</button>
            </section>
        </section>
        </section>

    )
}
export default DeleteInventory