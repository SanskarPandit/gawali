import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import {
  Dashboard,
  Register,
  Payment,
  MyPlans,
  Vacation,
  Wallet,
  Products,
  ChangePassword,
  Calendar,
  Support,
  Orders,
  Profile,
  Bills,
  PhoneLogin,
  Admin,
  Help,
  CustomerCare,
  RaiseComplaint,
  Requests,
  VerifyOtp
} from "./components";
import { AuthProvider } from "./context/AuthContext";
import { AxiosProvider } from "./context/AxiosContext";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { PersonalDetailsProvider } from './context/PersonalDetailsContext.tsx';
import {ProductsAndPlansProvider } from './context/ProductsAndPlansContext.tsx'
import { RequestProvider } from "./context/RequestsContext.tsx";
import { PlanProvider } from "./context/PlansContext.tsx";
import { BillsProvider } from "./context/BillsAuthContext.tsx";

const App: React.FC = () => {
  return (
    <AuthProvider>
        <AxiosProvider>
        <PersonalDetailsProvider>
          <BillsProvider>
        <ProductsAndPlansProvider>
        <RequestProvider>
          <PlanProvider>
      <BrowserRouter>
        <Box>
          <Routes>
          
            <Route path="/" element={<PhoneLogin />} />
              <Route path="/otp-verification" element={<VerifyOtp/>}/>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/register"  element={<Register />} />
              <Route path="/payment" element={<Payment />} />
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/my-plans" element={<MyPlans />} />
              <Route path="/vacation" element={<Vacation />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/support" element={<Support />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/help" element={<Help />} />
              <Route path="/customer-care" element={<CustomerCare />} />
              <Route path="/raise-complaint" element={<RaiseComplaint />} />
              <Route path="/request" element={<Requests />} />
            {/* </Route> */}
          </Routes>
        </Box>
      </BrowserRouter>
      </PlanProvider>
      </RequestProvider>
      </ProductsAndPlansProvider>
      </BillsProvider>
      </PersonalDetailsProvider>
      </AxiosProvider>
    </AuthProvider>
  );
};

export default App;

