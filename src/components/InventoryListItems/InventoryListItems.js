import React from "react";
import './InventoryListItems.scss'
import WarehouseInfo from "../WarehouseInfo/WarehouseInfo";
import WebTableMod from "../WebTableMod/WebTableMod";
import MobileTable from "../MobileTable/MobileTable";

function InventoryListItems() {
  return (
    <div className="list">
      <WarehouseInfo />
      <section className="list__table-web">
        <WebTableMod/>
      </section>
      <section className="list__table-mobile">
        <MobileTable/>
      </section>
    </div>
  );
}

export default InventoryListItems;
