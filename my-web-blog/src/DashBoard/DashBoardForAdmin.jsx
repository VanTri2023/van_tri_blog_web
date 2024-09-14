import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Content from './Content/Content.jsx'; // Import component Content
import { Outlet } from 'react-router-dom';

function DashBoardForAdmin(){
    return(
        <>
            
            <Sidebar></Sidebar>
            <Outlet></Outlet>
           
        </>
        
    );
}
export default DashBoardForAdmin