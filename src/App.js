import './App.scss';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
import WarehouseList from './components/WarehouseList/WarehouseList';
import InvetoryList from './components/WarehouseInfo/WarehouseInfo';
import Layout from './components/Layout/Layout';
import AddInventory from './components/AddInventory/AddInventory';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import EditInventoryItem from './components/EditInventoryItem/EditInventoryItem';
// import WarehouseDetails from './components/DNU WarehouseDetails/WarehouseDetails';
import Inventory from './components/Inventory/Inventory';
import InventoryItem from './components/InventoryItem/InventoryItem';
import AddItem from './components/AddInventory/AddInventory'
import DeleteInventory from './components/DeleteInventory/DeleteInventory';
import InventoryListItems from './components/InventoryListItems/InventoryListItems';
import ItemDetails from './components/ItemDetails/ItemDetails';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse" element={<WarehouseList />} />
        <Route path="/warehouse/:id" element={<InventoryListItems/>} />
        <Route path="/inventory/delete/:id" element={<DeleteInventory/>}/>
        <Route path='/inventory/edit/:id'element={<EditInventoryItem/>}/>
        <Route path='/inventory/:id' element={<ItemDetails/>}/>
        {/*<Route path="/warehouse/addwarehouse/:id" element={<AddWarehouse/>}/>*/}
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/warehouse/edit/:id" element={<EditWarehouse />} />
        <Route path="/warehouse/addwarehouse/" element={<AddWarehouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<ItemDetails/>}/>
        <Route path="/inventory/addinventory/" element={<AddInventory />} />
        <Route path="/inventory/edit/:id" element={<EditInventoryItem/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
