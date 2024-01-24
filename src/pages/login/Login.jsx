import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./Login.css";
import LoginComp from "../../components/login/LoginComp";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYlZRaGUeQvoJN9kssovCzcs7tnho4toE",
  authDomain: "molten-calling-280520.firebaseapp.com",
  projectId: "molten-calling-280520",
  storageBucket: "molten-calling-280520.appspot.com",
  messagingSenderId: "909615676817",
  appId: "1:909615676817:web:c1ede874ce86e46b07ee30",
  measurementId: "G-T8V0BWK0QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log('email',email)
  console.log('pass',password)

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!");
      navigate("/map");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registered successfully!");
      navigate("/map");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <>
      <LoginComp
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    </>
  );
};

export default Login;
