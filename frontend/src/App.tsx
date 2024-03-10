import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/React-toastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer />
    </>
  );
}

export default App;
