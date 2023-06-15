import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import IsAuthenticated from "./components/IsAuthenticated";
import Landing from "./components/Landing";
import Users from "./components/Users";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
const RoutePage=()=>{
    return(
<>
 <BrowserRouter>
    <Routes>
        <Route element={<Landing/>} path="/" />
       
        <Route element={<Login/>} path="/login" />
        <Route element={<Signup/>} path="/signup" />
        <Route path="/users"
  element={
    <IsAuthenticated>
      <Users />
    </IsAuthenticated>
  }
/>

<Route path ="/profile"
element={
  <IsAuthenticated>
    <Profile/>
  </IsAuthenticated>

}
/>
    </Routes>
    </BrowserRouter>
</>
    )
   
}
export default RoutePage;