import { Dispatch } from "react";


type FilterButtonProps = {
    filter: string;
    filterArray:string[];
    setFilterArray: Dispatch<any>;
}

const FilterButton = (props:FilterButtonProps) => {
    const {filter, filterArray, setFilterArray} = props;

    const handleClick = () => {
        if(filterArray.includes(filter)) {
            setFilterArray((prev:string[])=>{
                return prev.map((ele) => ele!==filter)
            })
        } else {
            setFilterArray((prev:string[])=>[...prev,filter])
        }
    }
    return (
        <button className={`filter__btn ${filterArray.includes(filter) && "active__btn"}`}
            onClick={()=>handleClick()}
        >{filter}</button>
    )
}

export default FilterButton;