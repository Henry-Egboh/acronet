import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import RootLayout from './components/layout/rootLayout';
import Products from './components/pages/products';
import Accessories from './components/pages/accessories';
import Phones from './components/pages/phones';
import ErrorPage from './components/pages/errorPage';
import Home from './components/pages/home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route path='home' element={<Home />}/>
        <Route path='products' element={<Products />} />
        <Route path='phones' element={<Phones />}/>
        <Route path='accessories' element={<Accessories />} />
      </Route>
    )
  )
  return (
    <header>
      <RouterProvider router={router} />
    </header>
  )
}

export default App;
