import style from "./ProfileFloater.module.scss";

const Item = () => {
    return <div className={style['pf-item']}>item</div>
}

const ProfileFLoater = (props:any) => {
        return <div className={style[props.show?'profile-floater':'profile-floater-hidden']}>
            {props.show?<div>
                <Item/>
                <Item/>
                <Item/>
            </div>:null}
        </div>
}

export default ProfileFLoater;