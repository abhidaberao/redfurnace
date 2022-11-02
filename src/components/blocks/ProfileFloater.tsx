import style from "./ProfileFloater.module.scss";

const Item = (props:any) => {
    return <div className={style['pf-item']}>{props.name}</div>
}

const ProfileFLoater = (props:any) => {
        return <div className={style[props.show?'profile-floater':'profile-floater-hidden']}>
            {props.show?<div>
                <Item name="Profile"/>
                <Item name="Logout"/>
            </div>:null}
        </div>
}

export default ProfileFLoater;