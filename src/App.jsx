import './App.css'
import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Login from './Components/Auth/Login/Login'
import Signup from './Components/Auth/Signup/Signup'
import Footer from './Components/footer/footer'
import NavbarContainer from './Components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

// import Context from './context/context'

import { PrivateRoutes, PublicRoutes } from './Components/Navbar/Links/linkRoutes'
import { AuthGuard } from './guard/authGuard'
import RoutesWithNotFound from './helpers/route-with-not-found'
import Spinner from './Loading/Spinner'
import LoadingPage from './Loading/LoadingPage.jsx'
import PaymentStatus from './Components/Payment/status/status.jsx'

const Store = lazy(() => import('./Components/Store/List/store'))
const Cart = lazy(() => import('./Components/Cart/cart'))
const Home = lazy(() => import('./Components/Home/Home'))
const StoreDetail = lazy(() => import('./Components/Store/Detail/StoreDetail'))
const Payment = lazy(() => import('./Components/Payment/Payment'))
const Category = lazy(() => import('./Components/Store/category/Category.jsx'))


function App() {

  return (
    <>
    <Suspense fallback={<LoadingPage />} >
      <BrowserRouter>
        <NavbarContainer />
        <RoutesWithNotFound>
            <Route path="/" element={ <Navigate to={`${PrivateRoutes.HOME}`}/> }/>
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGNUP} element={<Signup />} />

          <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.HOME} element={<Home />} />
              <Route path={PrivateRoutes.CART} element={<Cart />} />
              <Route path={PrivateRoutes.STORE_CATEGORY } element={<Category />}/>
              <Route path={PrivateRoutes.PAYMENT} element={<Payment />} />
              <Route path={PrivateRoutes.STORE} element={<Store />} />
              <Route path={PrivateRoutes.STORE_DETAIL} element={<StoreDetail />} />
              <Route path={PrivateRoutes.PAYMENT_STATUS} element={<PaymentStatus />} />
          </Route>

          <Route path="*" element={<Navigate to={PrivateRoutes.HOME} />} />

        </RoutesWithNotFound>

        <Footer />
      </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
