import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/Signup";
import Sidebar from "./component/Home_Page/Sidebar";
import Dashboard from "./component/Home_Page/Dashboard";
import Upload from "./component/Home_Page/Upload";
import About from "./component/Home_Page/About";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },

  {
    path: "/",
    element:
        <Sidebar><Dashboard /></Sidebar>
  },
  {
    path: "/upload",
    element:
    <Sidebar><Upload /></Sidebar>
  },
  {
    path: "/about",
    element:
    <Sidebar><About /></Sidebar>
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

};

export default App;
