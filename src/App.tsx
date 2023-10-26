import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css'
import Header from './components/Header';
import Search from './components/Search';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartList from './components/Cart';
import Shop from './components/Shop';
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';
import store from './store/store';

const Layout = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <Container className="content mt-3">
          <Search />
          <Outlet />
        </Container>
        <Footer />
      </div>
    </Provider>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/shop/:shopId",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <CartList />,
      }
    ]
  }
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
