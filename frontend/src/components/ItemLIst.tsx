
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import { useProductsQuery } from "../store/services/productsApi";
import {ItemModal, MyModalHandles} from "./ItemModal";
import { Product } from "../store/models/product.model";
import { findProductImage } from "./utils/findProductImage";



type Item = {
  id: string;
  focus: boolean;
};

export default function ItemLIst() {
  const {data, isSuccess} = useProductsQuery();
  const [isHovering, setIsHovering] = useState<Item | null>(null);
  const [product, setProduct] = useState({} as Product);
  const buttonRef = useRef({} as MyModalHandles)

  const handleMouseOver = (id: string) => {
    const focus = true;
    setIsHovering({ id, focus });
  };

  const handleMouseOut = (id: string) => {
    setIsHovering(null);
  };

  const clickViewProduct = (product: Product) => {
    setProduct(product);
    buttonRef.current.showModal();
  }

  return (
    <Box
      sx={{
        marginTop: { md: "13rem" },
        marginLeft: { lg: "15rem", xs: "0" },
        marginRight: { lg: "15rem", xs: "0" }
      }}
    >
      <ItemModal item={product} ref={buttonRef}/>
      <Grid container spacing={2}>
        {isSuccess &&
          data.map((item) => (
            <Grid key={item._id} item md={3} sm={6} xs={12}>
              <Box
                m="auto"
                sx={{ position: "relative", width: { md: "100%", xs: "80%" } }}
                onMouseOver={() => handleMouseOver(item._id)}
                onMouseOut={() => handleMouseOut(item._id)}
                onClick={() => clickViewProduct(item)}
              >
                <Box>
                  {isHovering?.id === item._id ? (
                    <Fade in={isHovering.focus}>
                      <Fab
                        color="primary"
                        aria-label="add"
                        sx={{ position: "absolute", right: "12px", top: "-20px" }}
                      >
                        View
                      </Fab>
                    </Fade>
                  ) : null}
                  <Stack direction="row" spacing={2} sx={{width: "100%", justifyContent: 'center'}}>
                    <img
                      src={findProductImage(item.imagePath)}
                      alt={item.name}
                      width="90%"
                      height="260px"
                    />
                  </Stack>
                  <Typography
                    mt={1}
                    sx={{ fontSize: 17, fontWeight: 500 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {" "}
                    {item.name}{" "}
                  </Typography>
                  <Stack sx={{ alignItems: "center" }}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.ratings}
                      max={6}
                      readOnly
                      sx={{ color: "#43616b" }}
                    />
                  </Stack>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    ({item.reviews.length} Previews)
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    ${item.price.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
