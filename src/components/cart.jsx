import { Button, Grid2, Typography } from "@mui/material";
import { useContext } from "react";
import { globalcontext } from "./context";
import SingleCart from "./singlecart";
import { useNavigate } from "react-router-dom";

export function Cart (){
  const {cart} = useContext(globalcontext);
  const navigate = useNavigate();
  let totalprice = () => {
    let total = 0;
    cart?.map((item)=>{
      total += item?.total
    })
    return total;
  }
  return (
  <>
  <h1>Cart</h1>
  <Grid2 container direction={"row"}>
    <Grid2 item>
      {
        cart && cart?.length > 0 ?
        cart.map((item)=><SingleCart key={item.id} item={item}/>)
        : "no item in the cart"
      }
    </Grid2>

    <Grid2 position={"absolute"} right={20}>
      <Typography variant="h5">Order Summary</Typography> 
      <Typography variant="h5">Total : {totalprice()}</Typography>
      <Button variant="contained" onClick={()=>navigate('/products')}>continue shopping </Button>
    </Grid2>
  </Grid2>
  </>
  )
}