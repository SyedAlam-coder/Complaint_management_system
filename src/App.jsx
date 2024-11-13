import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes } from "react-router-dom";
import Complaint from "./pages/Complaint.jsx";
import ComplaintStatus from "./pages/ComplaintStatus";
import Sidebar from './components/Sidebar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
 
 let [toggle,setToggle]=useState(false)
  let handleSidebar=()=>{
    setToggle(!toggle)
  }
  return (
    <div className="main-wrapper  ">
        <div className={`sidebar col-md-3 px-0 ${toggle?'active':''}`}>
          <Sidebar  settoggle={setToggle}/>
        </div>
        <div className="main-content container col-md-9">
          <div className="bars d-md-none  " onClick={handleSidebar}><MenuIcon/></div>
          <Routes>
            <Route path="/" element={<Complaint />} />
            <Route path="/ComplaintStatus" element={<ComplaintStatus />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
