import { Header, Footer, Aside } from "../Components/index";

import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                </div>

                <div className="main-body">

                    <div className="flex-center-column flex-align-center">

                        <h2 className="text-xl login-header">Login</h2>
                        <div className="login-form flex-center-column box-shadow">

                            <div className="flex-column">
                                <label for="email">Email:</label>
                                <input className="login-input" type="text" id="email" required />
                            </div>
                            <div className="flex-column">
                                <label for="password">Password:</label>
                                <input className="login-input" type="password" id="password" required />
                            </div>
                            <div>
                                <input type="checkbox" id="remember" />
                                <label for="remember">Remember me</label>

                                <span className="signup">Don't have an account?, <Link className="signup-link" to="/signup">Signup</Link></span>
                            </div>

                            <Link to="/"><button className="btn primary-btn" type="submit">Login</button></Link>

                        </div>

                    </div>


                </div>

            </div>

            <Footer />
        </div>
    )
}