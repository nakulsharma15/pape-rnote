import { Header, Footer, Aside } from "../Components/index";
import axios from "axios";

import { Link } from "react-router-dom";

export default function Login() {

    const testCredentials = {
        email: "nakulsharma@gmail.com",
        password: "Nakul@123"
    }

    const handleLogin = async(loginData) => {

            try{
              const response = await axios.post("/api/auth/login", loginData);
              if(response.status===200 || response.status===201){
                const {foundUser,encodedToken} = response.data;
                localStorage.setItem("Token",encodedToken)
              }else{
               console.log("Error aya")
              }
            }catch(err){
              console.log(err);  
            }  
    }


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
                                <label htmlFor="email">Email:</label>
                                <input className="login-input" type="text" id="email" required />
                            </div>
                            <div className="flex-column">
                                <label htmlFor="password">Password:</label>
                                <input className="login-input" type="password" id="password" required />
                            </div>
                            <div>
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>

                                <span className="signup">Don't have an account?, <Link className="signup-link" to="/signup">Signup</Link></span>
                            </div>

                            <button className="btn primary-btn" type="submit" onClick={() => handleLogin(testCredentials)}>Login</button>

                        </div>

                    </div>


                </div>

            </div>

            <Footer />
        </div>
    )
}