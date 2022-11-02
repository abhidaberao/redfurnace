import style from "./SearchBar.module.scss";

const SearchBar = (props:any) => {
    return(
        <input
            type="text"
            className={style['search-bar']}
            placeholder="Search Offers"
            onChange={(e) => {props.handleChange(e)}}   
        />
    )
}

export default SearchBar;