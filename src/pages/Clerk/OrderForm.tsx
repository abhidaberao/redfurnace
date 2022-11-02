import DropDownSearch from "../../components/form/DropDownSearch";
import style from "./OrderForm.module.scss";

import {clients} from "../../_test_/TestData";

let clientNames = clients.map((client:any,index:number) => {
    return client.name;
});

const OrderForm = (props:any) => {
        return (
        <div className='form'>
            <DropDownSearch options={clientNames} placeholder="Client"/>
            <DropDownSearch options={clientNames} placeholder="Item"/>
            <DropDownSearch options={clientNames} placeholder="Material"/>
            <DropDownSearch options={clientNames} placeholder="Unit"/>
        </div>
        );
}

export default OrderForm;