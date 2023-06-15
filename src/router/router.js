import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ListProducts from "../components/TopCodePage/ListProducts";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";
import LoginPage from "../components/AuthenticationPage/Login";
import RegisterPage from "../components/AuthenticationPage/Register";
import ForgotPassPage from "../components/AuthenticationPage/ForgotPass";
import ProfilePage from "../components/ProfilePage/Profile";
import ChangePassPage from "../components/AuthenticationPage/ChangePass";
import CartDetailPage from "../components/CartDetailPage/CartDetailPage";
import {LikedCodes} from "../components/Commons/LikedCodes";
import {ErrorPage404} from "../components/ErrorPage/ErrorPage404";
import VerifyPassPage from "../components/AuthenticationPage/VerifyPass";
import FreeCodes from "../components/TopCodePage/FreeCodes";
import HighQualityCodes from "../components/TopCodePage/HigtQualityCodes";

const profile = {path: '/profile', element: <ProfilePage/>}
const listAuthentication = [
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/forgot-password',
        element: <ForgotPassPage/>
    },
    {
        path: '/change-password',
        element: <ChangePassPage/>
    },
    {
        path: "/verify-password",
        element: <VerifyPassPage/>
    }
]

const listProducts = [
    {
        path: '/top-codes/*',
        element: <ListProducts/>
    },
    {
        path: '/top-codes/product/:productId',
        element: <ProductDetails/>
    },
    {
        path: '/quality-codes',
        element: <HighQualityCodes/>
    },
    {
        path: '/quality-codes/product/:productId',
        element: <ProductDetails/>
    },
    {
        path: '/free-codes',
        element: <FreeCodes/>
    },
    {
        path: '/free-codes/product/:productId',
        element: <ProductDetails/>
    },
    {
        path: '/product/:productId',
        element: <ProductDetails/>
    }
]

const likedCodes = [{
    path: '/liked-codes',
    element: <LikedCodes/>
}]

const cart = [{
    path: '/cart-details',
    element: <CartDetailPage/>
}]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage404/>
    },
    profile,
    ...listProducts,
    ...listAuthentication,
    ...cart,
    ...likedCodes
])