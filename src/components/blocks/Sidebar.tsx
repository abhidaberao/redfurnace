import style from "./Sidebar.module.scss"

const SideBarItem =(props:any) => {
        let isActive = props.index === props.sectionIndex;

        return (
        <div
        className={style[isActive?'side-bar-item-active':'side-bar-item']}
        onClick={() => {props.onClick(props.index)}}>
                <div className={style['item-title']}>{props.name}</div>
                <div className={style[isActive?'triangle-left-show':'triangle-left-hide']}></div>
        </div>)
}

const SideBar =(props:any) => {

    let menuItems = props.items.map(
        (s:string, index:number) => 
        <SideBarItem 
            name={s}
            key={index}
            index={index}
            sectionIndex={props.sectionIndex}
            onClick={props.changeSectionCallback}/>
        )

        return <div className={style.sidebar}>
            {menuItems}
        </div>
}

export default SideBar;