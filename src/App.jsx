import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";


import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Footer from "./Components/footer/footer";
import NavbarContainer from "./Components/Navbar/Navbar";



import Contact from "./Pages/contact/Contact.jsx";
import {
  PrivateRoutes,
  PublicRoutes,
} from "./Components/Navbar/Links/linkRoutes";
import PaymentStatus from "./Components/Payment/status/status.jsx";
import { AuthGuard } from "./guard/authGuard";
import RoutesWithNotFound from "./helpers/route-with-not-found";
import LoadingPage from "./Loading/LoadingPage.jsx";


// Tiene que ser transferido a la carpeta pages
const Store = lazy(() => import("./Components/Store/List/store"));
const Cart = lazy(() => import("./Pages/Cart/Cart.jsx"));
const Home = lazy(() => import("./Pages/Home/Home"));
const StoreDetail = lazy(() => import("./Components/Store/Detail/StoreDetail"));
const Payment = lazy(() => import("./Components/Payment/Payment"));
const Category = lazy(() => import("./Components/Store/category/Category.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <NavbarContainer />
          <RoutesWithNotFound>
            <Route
              path="/"
              element={<Navigate to={`${PrivateRoutes.HOME}`} />}
            />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.CART} element={<Cart />} />
            <Route path={PrivateRoutes.STORE_CATEGORY} element={<Category />} />
            <Route path={PrivateRoutes.STORE} element={<Store />} />
            {/* <Route path={PrivateRoutes.ADMIN} element={<Admin />} /> */}
            <Route path={PrivateRoutes.CONTACT} element={<Contact />} />
            <Route
              path={PrivateRoutes.STORE_DETAIL}
              element={<StoreDetail />}
            />

            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.PAYMENT} element={<Payment />} />
              <Route
                path={PrivateRoutes.PAYMENT_STATUS}
                element={<PaymentStatus />}
              />
            </Route>

            <Route path="*" element={<Navigate to={PrivateRoutes.HOME} />} />
          </RoutesWithNotFound>

          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
