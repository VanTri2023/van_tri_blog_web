
import Sidebar from './Sidebar/Sidebar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content/Content.jsx'; // Import component Content
function DashBoardForAdmin(){
    return(
        <>
            
            <Sidebar></Sidebar>
            <Routes>
  
                <Route path="/admin/PostContentList" element={<Content />} />
            </Routes>
        </>
        
    );
}
export default DashBoardForAdmin