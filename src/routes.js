import Login from './components/Login'
import Catalog from './components/Catalog'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'


export const publicRoutes = [
  {
      path: '/login',
      Component: Login
  }
]

export const privateRoutes = [
  {
      path: '/catalog',
      Component: Catalog
  },
  {
    path: '/createProduct',
      Component: CreateProduct
  },
  {
    path: '/editProduct',
    Component: EditProduct
  }
]