import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserHomepage from "./pages/UserHomepage/UserHomepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import SupplierDashboard from "./pages/Instructor/InstructorDashboard";
import SupplierOrders from "./pages/Instructor/InstructorCourses";
import OrderDetail from "./pages/Instructor/InstructorCourseDetail";
import Cart from "./pages/Cart/Cart";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/instructor" element={<SupplierDashboard />} />
        <Route path="/instructor/courses" element={<SupplierOrders />} />
        <Route path="/instructor/courses/:id" element={<OrderDetail />}></Route>
        <Route path="/admin" element={<AdminHomepage/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
