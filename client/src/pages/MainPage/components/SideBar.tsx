import FilterComponent from "./FilterComponent";
import Details from "./Details";
import { Dispatch } from "react";

type SideBarProps = {
    setIsAddPage: Dispatch<any>;
    userDetails: any;
    filterArray:string[];
    setFilterArray:Dispatch<any>;
}

const SideBar = (props:SideBarProps) => {
    const {setIsAddPage, userDetails, filterArray, setFilterArray} = props;
    return(
        <div className="sidebar--container">
            <Details setIsAddPage={setIsAddPage} userDetails={userDetails}/>
            <FilterComponent setFilterArray={setFilterArray} filterArray={filterArray}/>
        </div>
    )
}

export default SideBar;