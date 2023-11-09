import Auth from "./Auth";
import WelcomeCard from "./WelcomeCard";
import "./landingPage.css";

const LandingPage = () => {
    return (
        <div className="landing--bg">
            <div className="landing--pg--container">
                <WelcomeCard/>
                <Auth/>
            </div>
        </div>
    )
}

export default LandingPage;