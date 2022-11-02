
import DropDownButton from "../ui/DropDownButton";
import style from "./Navbar.module.scss";
import { BsCaretDownFill } from 'react-icons/bs';

const Navbar = (props:any) => {
        return <div className={style.navbar}>
            <div className={style.space}></div>
            <div className={style.title}>{props.title}</div>
            <div className={style['profile-menu']}>
                <div className={style['profile-button']}>
                    <DropDownButton name="username" onClick={props.profileToggleCallback}/>
                    <BsCaretDownFill color="white" size={12}/>
                </div>
            </div>
        </div>
}

export default Navbar;