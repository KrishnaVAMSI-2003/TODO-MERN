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
                <h3>Details</h3>
                <p>{userDetails.username}</p>
                <p>{userDetails.email}</p>

            </div>
            <hr/>
            <button className="details__todoadd__btn"
                onClick={() => setIsAddPage(true)}
            >+ ADD TODO</button>
        </div>
    )
}

export default Details;