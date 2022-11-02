import { useCallback, useState } from "react";
import style from "./DropDownSearch.module.scss";

const MenuItem = (props:any) => {
    return (
        <div className={style['menu-item']} onClick={() => {props.onClick(props.name)}}>
            {props.name}
        </div>
    );
}

const DropDownSearch = (props:any) => {

    let [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e:any) => {
        setSearchQuery(e.target.value);
    }

    let [value, setValue] = useState('');

    const setNewValue = (val:any) => {
        setValue(val);
    }

    const searchFilter = (list:any) => {
        return list.filter((item:String) => {
            return (item.toLowerCase().includes(searchQuery.toLowerCase()));
        });
    }

    const menuItems = searchFilter(props.options).map((option:String,index:number) => {
        return <MenuItem name={option} onClick={setNewValue}/>
    });

        return (
        <div className={style['drop-down-search']}>
            <input
                className={style['input']}
                type="text"
                placeholder={props.placeholder}
                onChange={handleChange}
                //value={value}
            />

            {(searchQuery !== '')?<div className={style['floater-menu']}>{menuItems}</div>:null}
        </div>);
}

export default DropDownSearch;