import { Header, Footer, Aside } from "../Components/index";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {

    const testCredentials = {
        email: "nakulsharma@gmail.com",
        password: "Nakul@123"
    }

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (loginData) => {

        try {
            const response = await axios.post("/api/auth/login", loginData);
            if (response.status === 200 || response.status === 201) {
                const { foundUser, encodedToken } = response.data;
                toast.success("You've successfully logged in.");
                localStorage.setItem("Token", encodedToken)
                navigate(location.state?.from?.pathname === undefined ? "/" : location.state?.from?.pathname, { replace: true });
            } else {
                toast.error("Something went wrong, Check your credentials");
            }
        } catch (err) {
            toast.error("Something went wrong, Please try again later");
            console.log(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email cannot be empty").min(5, "Please enter a valid email address"),
            password: Yup.string().required("Password cannot be empty")
        }),
        onSubmit: (values, actions) => {
            handleLogin(JSON.stringify(values));
            actions.resetForm();
        },
    },
    );


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

                            <form onSubmit={formik.handleSubmit}>

                                <div className="flex-column margin-one-bottom">
                                    <label htmlFor="email">Email:</label>
                                    <input className="login-input" type="text" id="email" name="email" required {...formik.getFieldProps("email")} />

                                    {
                                        (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
                                    }
                                </div>

                                <div className="flex-column margin-one-bottom">
                                    <label htmlFor="password">Password:</label>
                                    <input className="login-input" type="password" id="password" name="password" required {...formik.getFieldProps("password")} />

                                    {
                                        (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                                    }
                                </div>

                                <div className="flex-sp-ev flex-align-center margin-one-bottom">
                                    <p className="guest-login-btn" onClick={() => handleLogin(testCredentials)}>Login as a Guest</p>

                                    <span className="signup">Don't have an account?, <Link className="signup-link" to="/signup">Signup</Link></span>
                                </div>

                                <button className="btn primary-btn" type="submit">Login</button>

                            </form>
                        </div>

                    </div>


                </div>

            </div>

            <Footer />
        </div>
    )
}