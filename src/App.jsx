import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Products from './components/pages/Products';
import Accessories from './components/pages/Accessories';
import Phones from './components/pages/Phones';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<Home />}/>
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
