import { useRoutes } from "react-router-dom"
import { Products } from "./components/products";
import { ProductDetails } from "./components/productdetails";
import { Cart } from "./components/cart";
import { NotFound } from "./components/notfoundpage";

function CustomRoute(){
  const element = useRoutes([
    {
      path: '/products',
      element: <Products />,
    },{
      path: '/products/:id',
      element: <ProductDetails />,
    },{
      path: '/cart',
      element: <Cart />,
    },{
      path: '*',
      element: <NotFound />,
    }
  ]);
  return element;
}
function App() {
  return (
  <div>
    <h1>akash</h1>
    <CustomRoute/>
  </div>
  )
}

export default App
