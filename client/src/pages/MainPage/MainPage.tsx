import { useEffect, useState } from "react";

const MainPage = () => {
    if(localStorage.getItem("token") === null) {
        window.location.href = "/";
    }

    // const [user, setUser] = useState();

    useEffect(() => {
        // const token = localStorage.getItem("token");
    })

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
            }}>logout</button>
        </div>
    )
}

export default MainPage;