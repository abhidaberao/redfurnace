import { useState } from "react";
import style from "./Card.module.scss";
import { GrClose, GrDown, GrUp } from "react-icons/gr";

const Card = (props:any) => {

        let [isExpanded, toggleExpanded] = useState(false);

        return <div className={style.card}>
                <div className={style['header']}
                        onClick={() => {toggleExpanded(isExpanded?false:true)}}>
                                {props.header}
                                {isExpanded?<GrUp/>:<GrDown/>}
                </div>
                {isExpanded?<div className={style['card-body']}>
                        {props.body}
                </div>:null}
        </div>
}

export default Card;