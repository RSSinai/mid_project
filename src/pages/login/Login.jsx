import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./Login.css";
import LoginComp from "../../components/login/LoginComp";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAyhpz62yj8GUn0uXw0JTSS-mxK62H7CoU",
  authDomain: "walkapro-c469d.firebaseapp.com",
  projectId: "walkapro-c469d",
  storageBucket: "walkapro-c469d.appspot.com",
  messagingSenderId: "82529881081",
  appId: "1:82529881081:web:07355cdf44445e375e0b28",
  measurementId: "G-JZEPM9SWKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email", email);
  console.log("pass", password);

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
