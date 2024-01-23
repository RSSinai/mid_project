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
  apiKey: "AIzaSyAye_dSjI8Fwiu9qKg9VxrFT4DrATSD1B4",
  authDomain: "walka-36e17.firebaseapp.com",
  projectId: "walka-36e17",
  storageBucket: "walka-36e17.appspot.com",
  messagingSenderId: "846511120002",
  appId: "1:846511120002:web:91d727c768433e7d1cde9b",
  measurementId: "G-DXYLWM5CLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
