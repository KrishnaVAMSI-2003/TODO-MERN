import Auth from "./components/AuthComponent";
import WelcomeCard from "./components/WelcomeCard";
import "./css/landingPage.css";

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