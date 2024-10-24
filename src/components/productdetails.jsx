import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { globalcontext } from "./context";
import { Box, Grid, ImageList, ImageListItem, Stack, Typography, Button } from "@mui/material";

export function ProductDetails() {
  const { id } = useParams();
  const {loading, setLoading, productDetails, setProductDetails, handleAddToCart} = useContext(globalcontext);

  async function fetchproduct() {
    try{
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      if (data) {
        setProductDetails(data);
        setLoading(false);
      } else {
        setProductDetails([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchproduct();
  }, [id]);

  if (loading) {
    return <h2>wait fetching the product Details</h2>;
  }

  return (
    <Box>
      <Grid container spacing={2} direction={"row"}>
        <Grid item xs={12} md={6}>
          <Stack>
            <img
              src={productDetails?.thumbnail}
              style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
              }}
              alt="Product Thumbnail"
            />
            {productDetails?.images?.length > 0 && (
              <ImageList
                sx={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              >
                {productDetails.images.map((item) => (
                  <ImageListItem key={item}>
                    <img src={item} alt="Product image" />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>{productDetails?.title}</Typography>
            <Typography>{productDetails?.description}</Typography>
            <Typography>{productDetails?.price}</Typography>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(productDetails)}
            >
              Add to cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
