import landingPageIcon from "../../assets/landingImage.jpg";
import "./welcomeCard.css"

const WelcomeCard = () => {
    return (
            <div className="welcome--card--container">
                <img src={landingPageIcon} className="landing__pg__img"/>
                <div className="welcome--container">
                    <div className="wel--head--cont">
                        <h1 className="welcome__heading">Welcome aboard!</h1>
                    </div>
                    <p className="welcome__text wel__l1">Organize your life with our easy-to-use todo app.</p>
                    <ul>
                        <li className="welcome__text wel__l2">Create and manage tasks with ease.</li>
                        <li className="welcome__text wel__l3">Set priorities and deadlines to stay on top of your work.</li>
                        <li className="welcome__text wel__l4">Access your tasks from anywhere, anytime, on any device.</li>
                    </ul>
                    <p className="welcome__text wel__l5">create a free account to start using the todo application.</p>
                    <p className="welcome__text wel__l6">Already have an account? Login to proceed</p>
                </div>
            </div>
    )
}

export default WelcomeCard;