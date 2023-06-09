import { useContext, useState, } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log("data", data);
        setLoginError('')
        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log("login", user.email)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className="h-[800px] flex flex-col justify-center items-center">
            <div className="w-72 lg:w-96">
                <h2 className="text-2xl text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full " {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full " {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be 6 characters or longer" } })} />
                        {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
                        <label className="label">
                            <span >
                                <Link to="/reset">Forget Password</Link>
                            </span>
                        </label>
                    </div>
                    <input className="btn btn-accent w-full" type="submit" value="Login" />
                    <div>
                        {loginError && <p className="text-red-500">{loginError}</p>}
                    </div>
                </form>
                <p className=" mt-4">New to Doctors Portal <Link className="text-secondary" to="/signup">Create new account</Link></p>
                <div className="flex flex-col w-full border-opacity-50 mt-4">
                    <div className="divider">OR</div>
                </div>
            </div>
            <button className="btn btn-outline w-72 lg:w-96 ">
                CONTINUE WITH GOOGLE
            </button>
        </div>
    );
};

export default Login;