import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Getmenu from "./pages/Getmenu";
import Categories from "./pages/Categories";
import Forgotpswd from "./pages/Forgotpswd";
import Table from "./pages/Table";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ViewOrder from "./pages/ViewOrder";
import UpdateOrder from "./pages/UpdateOrder";
import Pizza from "./pages/Pizza";
import NorthIndian from "./pages/NorthIndian";
import Paratha from "./pages/Paratha";
import Pastry from "./pages/Pastry";
import Biriyani from "./pages/Biriyani";
import Burgur from "./pages/Burgur";
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";
import Chinese from "./pages/Chinese";
import Khichdi from "./pages/Khichdi";
import CholeBhature from "./pages/CholeBhature";
import Pasta from "./pages/Pasta";
import Cake from "./pages/Cake";
import Roll from "./pages/Roll";
import Pavbhaji from "./pages/Pavbhaji";
import Noodle from "./pages/Noodle";
import Rasgulla from "./pages/Rasgulla";
import Shake from "./pages/Shake";
import Dosa from "./pages/Dosa";
import Gulabjamun from "./pages/Gulabjamun";
import Vada from "./pages/Vada";
import Idli from "./pages/Idli";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Getmenu" element={<Getmenu />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Forgotpswd" element={<Forgotpswd />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ViewOrder" element={<ViewOrder />} />
          <Route path="/UpdateOrder" element={<UpdateOrder />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/NorthIndian" element={<NorthIndian />} />
          <Route path="/Paratha" element={<Paratha />} />
          <Route path="/Biriyani" element={<Biriyani />} />
          <Route path="/Pastry" element={<Pastry />} />
          <Route path="/Burgur" element={<Burgur />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Chinese" element={<Chinese />} />
          <Route path="/Khichdi" element={<Khichdi />} />
          <Route path="/CholeBhature" element={<CholeBhature />} />
          <Route path="/Pasta" element={<Pasta />} />
          <Route path="/Cake" element={<Cake />} />
          <Route path="/Roll" element={<Roll />} />
          <Route path="/Pavbhaji" element={<Pavbhaji />} />
          <Route path="/Noodle" element={<Noodle />} />
          <Route path="/Rasgulla" element={<Rasgulla />} />
          <Route path="/Shake" element={<Shake />} />
          <Route path="/Dosa" element={<Dosa />} />
          <Route path="/Gulabjamun" element={<Gulabjamun />} />
          <Route path="/Vada" element={<Vada />} />
          <Route path="/Idli" element={<Idli />} />
        </Routes>
      </div>
   <Footer/> 
    </BrowserRouter>
  );
}

export default App;
