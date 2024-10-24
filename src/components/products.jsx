
import { Grid2 } from "@mui/material";
import { useContext } from "react"
import SingleProduct from "./singleproduct";
import { globalcontext} from "./context";

export function Products(){

  const{product,loading}=useContext(globalcontext);

  console.log(product)
  if (loading) return <h2>wait fetching the products</h2>
  return (
    <>
    <h1>Products</h1>
    <Grid2 container spacing={2}>
      {
        product && product?.length > 0 ?
        product.map((singleitem)=><SingleProduct key={singleitem.id} singleitem = {singleitem}/>)
        : 'no product present'
      }
    </Grid2>
    </>
  )
}