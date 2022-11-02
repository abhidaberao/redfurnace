import style from "./OrderForm.module.scss";
import { Dropdown, Input } from 'semantic-ui-react'
import {clients, items, materials, units} from "../../_test_/TestData";
import Button from "../../components/ui/Button";

let clientNames = clients.map((client:any,index:number) => {
    return {
        key : index,
        text : client.name,
        value : client.name 
    }
});

let itemNames = items.map((item:any,index:number) => {
    return {
        key : index,
        text : item.name,
        value : item.name 
    }
});

let materialNames = materials.map((material:any,index:number) => {
    return {
        key : index,
        text : material.name,
        value : material.name 
    }
});

let unitNames = units.map((unit:any,index:number) => {
    return {
        key : index,
        text : unit.name,
        value : unit.name 
    }
});


const OrderForm = (props:any) => {
        return (
        <div className={style['form']}>
            <Dropdown placeholder="Client" search selection options={clientNames}/>
            <Dropdown placeholder="Item" search selection options={itemNames}/>
            <Dropdown placeholder="Material" search selection options={materialNames}/>
            <Dropdown placeholder="Unit" search selection options={unitNames}/>
            <Input type='text' placeholder='quantity'/>
            <Input type='text' placeholder='rate'/>
            <Input type="submit"/>
        </div>
        );
}

export default OrderForm;