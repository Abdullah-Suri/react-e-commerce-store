import { createRoot } from 'react-dom/client';
import './css/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './components/Shop.jsx';
import SingleProduct from './components/SingleProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/single',
        element: <SingleProduct />
      },
      // {
      //   path: '/dashboard',
      //   element: (
      //     <ProtectedRoutes
      //       authComponent={<Dashboard />}
      //       guestComponent={<BlogList />}
      //     />
      //   )
      // },
      // {
      //   path: '/blogs/:user_id',
      //   element: <ProtectedRoutes guestComponent={<Login />} authComponent={<UserAllBlog />}/>
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
