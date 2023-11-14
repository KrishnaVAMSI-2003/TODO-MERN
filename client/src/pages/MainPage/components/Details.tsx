import { Dispatch } from "react";

type DetailsProps = {
    setIsAddPage: Dispatch<any>;
    userDetails: any;
}

const Details = (props:DetailsProps) => {
    const {setIsAddPage, userDetails} = props;
    return (
        <div className="details--component">
            <div className="details--container">
                <h3 style={{margin:"10px"}}>Hello!</h3>
                <p style={{margin:"10px"}}>{userDetails.username}</p>
                <span>Your registered email address is:</span>
                <p style={{margin:"10px"}}>{userDetails.email}</p>
            </div>
            <hr/>
            <button className="details__todoadd__btn"
                onClick={() => setIsAddPage(true)}
            >+ ADD TODO</button>
        </div>
    )
}

export default Details;