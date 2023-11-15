import { Dispatch } from "react";
import FilterButton from "./FilterButton";

type FilterComponentProps = {
    filterArray:string[];
    setFilterArray: Dispatch<any>;
}

const FilterComponent = (props:FilterComponentProps) => {
    const arr = ["Today","Due","Active","Completed"];
    const {filterArray, setFilterArray} = props;
    return (
        <div className="filter--container">
            <div className="filter__header">
                <h4>Filter options</h4>
                <button className="filter__clr__btn"
                    onClick={()=>setFilterArray([""])}
                >clear</button>
            </div>
            {
                arr.map((filter, ind)=><FilterButton key={ind} filter={filter} setFilterArray={setFilterArray} filterArray={filterArray}/>)
            }
        </div>
    )
}

export default FilterComponent;