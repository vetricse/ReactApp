
import { BrowserRouter, Route, Routes} from "react-router-dom";


import './App.css';
import DashBoard from "./Components/DashBoard";
import EditProfile from "./Components/EditProfile";
import Login from './Components/Login';
import Register from "./Components/Register";
import ViewPost from "./Components/ViewPost";
import ViewProfile from "./Components/ViewProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<DashBoard/>}>
         </Route>

        <Route path="/login"  element={<Login/>}>
         </Route>

        <Route path="/register" element={<Register/>}>
         </Route>

         <Route path="/viewprofile" element={<ViewProfile/>}>
         </Route>
         
         
        <Route path="/viewpost" element={<ViewPost/>}>
         </Route> 

         <Route path="/editprofile"element={<EditProfile/>}>
         </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
