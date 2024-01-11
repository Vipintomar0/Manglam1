import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CreateAccount = React.lazy(() => import("pages/CreateAccount"));
const Confirm = React.lazy(() => import("pages/Confirm"));
const Successful = React.lazy(() => import("pages/Successful"));
const Payment = React.lazy(() => import("pages/Payment"));
const Checkoutdelivery = React.lazy(() => import("pages/Checkoutdelivery"));
const Cart = React.lazy(() => import("pages/Cart"));
const ProductlistPage = React.lazy(() => import("pages/ProductlistPage"));
const ProfileCustomer = React.lazy(() => import("pages/ProfileCustomer"));
const SIGNUPVendorAccount = React.lazy(
  () => import("pages/SIGNUPVendorAccount"),
);
const SplashScreen = React.lazy(() => import("pages/SplashScreen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/splashscreen" element={<SplashScreen />} />
          <Route
            path="/signupvendoraccount"
            element={<SIGNUPVendorAccount />}
          />
          <Route path="/profilecustomer" element={<ProfileCustomer />} />
          <Route path="/productlistpage" element={<ProductlistPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkoutdelivery" element={<Checkoutdelivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
