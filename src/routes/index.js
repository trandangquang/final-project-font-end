import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: '/order',
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: '/products',
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: '/type',
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: '/login',
    page: LoginPage,
    isShowHeader: false,
  },
  {
    path: '/register',
    page: RegisterPage,
    isShowHeader: false,
  },
  {
    path: '/details',
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: '*',
    page: NotFoundPage,
    isShowHeader: false,
  },
];