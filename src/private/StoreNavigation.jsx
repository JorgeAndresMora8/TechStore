import { Route } from "react-router-dom"
import { PrivateRoutes } from "../Components/Navbar/Links/linkRoutes"
import Home from "../Components/Home/Home"
import Cart from "../Components/Cart/cart"
import Payment from "../Components/Payment/Payment"
import StoreDetail from "../Components/Store/Detail/StoreDetail"
import Store from "../Components/Store/List/store"

export default function StoreNavigation(){ 
    return ( 
        <>
        <Route path={PrivateRoutes.HOME} element={<Home />} />
        <Route path={PrivateRoutes.CART} element={<Cart />} />
        <Route path={PrivateRoutes.PAYMENT} element={<Payment />} />
        <Route path={PrivateRoutes.STORE} element={<Store />} />
        <Route path={PrivateRoutes.STORE_DETAIL} element={<StoreDetail />} />
        </>
    )
}