import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { globalcontext } from "./context";

function SingleCart({item}) {
  const {remove,update} = useContext(globalcontext);
  return (
  <Grid2 direction={"row"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyItems={"center"} >
    <Grid2 direction={"row"} display={"flex"} flexDirection={"row"} sx={{
      marginRight : '40px',
    }}>
      <img style={{
        width: "100px",
        height: "100px",
        objectFit: "contain",
        margin: "10px",
        display : "flex"
      }} src={item?.thumbnail} />
      <Stack>
        <Typography>{item?.title}</Typography>
        <Button onClick={()=>remove(item)}>REMOVE</Button>
      </Stack>
    </Grid2>
    <Grid2 >
      <Typography>Price : {item?.total}</Typography>
      <Typography>Quantity : {item?.quantity}</Typography>
      <Box>
        <Button variant="contained" onClick={()=>update(item,'sub')} disabled = {item?.quantity === 0 ? true:false}>-</Button>
        <Button variant="contained" onClick={()=>update(item,'add')}>+</Button>
      </Box>
    </Grid2>
  </Grid2>
  );
}

export default SingleCart;