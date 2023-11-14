import FilterComponent from "./FilterComponent";
import Details from "./Details";
import { Dispatch } from "react";

type SideBarProps = {
    setIsAddPage: Dispatch<any>;
    userDetails: any;
}

const SideBar = (props:SideBarProps) => {
    const {setIsAddPage, userDetails} = props;
    return(
        <div className="sidebar--container">
            <Details setIsAddPage={setIsAddPage} userDetails={userDetails}/>
            <FilterComponent/>
        </div>
    )
}

export default SideBar;