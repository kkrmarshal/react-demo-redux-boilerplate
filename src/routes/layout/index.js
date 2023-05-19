import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../views/header";
import Sidebar from "../../views/Sidebar";



const AppLayout = () => {
  const token = localStorage.getItem("token")
  useEffect(()=>{
console.log("tokne")
  },[token])
  return (
    <>
    
      <div className={token && "wrapper-active"}>
       {token && <Sidebar />} 
       <div>
        {token && <Header/>}
        <Outlet />
       </div>
       </div> 
       
    </>
  );
};
export default AppLayout;
