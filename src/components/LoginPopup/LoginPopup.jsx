import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { auth } from "../../firebase";
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";

const LoginPopup = ({ setShowlogin, setUser, user }) => {
    //   const [user, setUser] = useState(null);
    const [currentState, setCurrentState] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);

    // Google Login
    const googleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (err) {
            console.error(err.message);
        }
    };

    
    const facebookLogin = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (err) {
            console.error(err.message);
        }
    };

  
    const registerWithEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        } catch (err) {
            alert(err.message);
        }
    };
    const loginWithEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        } catch (err) {
            alert(err.message);
        }
    };

    // Logout
    const logout = () => {
        signOut(auth);
        setUser(null);
    };

    return (
        <div className="login-popup">
            <form
                onSubmit={currentState === "Login" ? loginWithEmail : registerWithEmail}
                className="login-form"
            >
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <img
                        onClick={() => setShowlogin(false)}
                        src={assets.cross_icon}
                        alt="close"
                    />
                </div>

                {/* Email/Password Inputs */}
                <div className="login-inputs">
                    {currentState === "Sign Up" && <input type="text" placeholder="username" required />}
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="login-condition">
                    <input type="checkbox" className="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <button type="submit">
                    {currentState === "Sign Up" ? "Create Account" : "Login"}
                </button>

                {currentState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrentState("Login")}>Login here</span>
                    </p>
                )}
            </form>

            {/* Social Login & Phone OTP */}
            <div className="social-login">
                {user ? (
                    <>
                        <h2>Welcome {user.displayName || user.email || user.phoneNumber}</h2>
                        {user.photoURL && <img src={user.photoURL} alt="profile" />}
                        <button onClick={logout} className="logout-btn">Logout</button>
                    </>
                ) : (
                    <>
                        <button onClick={googleLogin} className="google-btn">Login with Google</button>
                        <button onClick={facebookLogin} className="facebook-btn">Login with Facebook</button>

                     
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPopup;
