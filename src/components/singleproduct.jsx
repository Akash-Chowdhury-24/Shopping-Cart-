import { Button, Grid2, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { globalcontext } from "./context";

function SingleProduct({singleitem}) {
  const navigate = useNavigate();
  return (
    <Grid2 key={singleitem?.id}>
      <img src={singleitem?.thumbnail}/>
      <Typography>{singleitem?.title}</Typography>
      <Typography>{singleitem?.price}</Typography>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" onClick={()=>navigate(`/products/${singleitem?.id}`)}>
          Details
        </Button>
      </Stack>
        
    </Grid2>
  );
}

export default SingleProduct;