import { Header, Footer, Aside } from "../Components/index";

import { Link } from "react-router-dom";

export default function Signup() {

    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                </div>

                <div className="main-body">

                    <div className="container flex-center-column">

                        <h2 className="text-xl">Sign up</h2>
                        <div className="signup-form flex-center-column">
                            <div className="flex-column">
                                <label for="name">Full Name:</label>
                                <input className="signup-input" type="text" id="name" />
                            </div>

                            <div className="flex-column">
                                <label for="email">Email:</label>
                                <input className="signup-input" type="text" id="email" />
                            </div>

                            <div className="flex-column">
                                <label for="password">Password:</label>
                                <input className="signup-input" type="password" id="password" />
                            </div>

                            <div className="flex-column">
                                <label for="confirm-password">Confirm Password:</label>
                                <input className="signup-input" type="password" id="confirm-password" />
                            </div>

                            <div>
                                <input type="checkbox" id="confirm" />
                                <label for="confirm">I accept all terms & conditions</label>
                            </div>

                            <Link to="/"><button className="btn primary-btn">Sign up</button></Link>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}