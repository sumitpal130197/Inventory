import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "../Pages/Dashboard";
import GenerateInvoice from "../Pages/GenerateInvoice";
import Inventory from "../Pages/Inventory";
import AddProduct from "../Pages/AddProduct";

function Common(props) {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
        <Route path="/invenroty" element={<Inventory />} />
        <Route path="/add-product" element={<AddProduct />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default Common;
