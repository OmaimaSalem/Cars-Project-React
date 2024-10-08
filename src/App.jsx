import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import Home from './components/Home/Home.jsx'
import AllCars from "./components/AllCars/AllCars.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement:<NotFound/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "home",
          element: <Home />,
        
        },
        {
          path: "home/all-cars",
          element: <AllCars />,
        },
        {
          path: "/car/:id",
          element: <ProductDetails/>
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>

    </>
  );
}

