import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Stack, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from 'react-router-dom';

const CartFooter = () => {
  let total = 0;
  const cartItemList = useSelector((state: RootState) => state.cart.itemsList);
  cartItemList.map(({ totalPrice }) => (total += totalPrice));
  const navigate = useNavigate();


  const addToCart = () => {
    navigate('/checkout');
  }

  return (
    <Box sx={{ backgroundColor: "#f7f3ee" }}>
      <Stack>
        <Stack p={1}>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
              fontSize: "15px",
              m: 2,
              textAlign: "center",
              fontWeight: "400",
            }}
            component="h4"
          >
            Your order ships for free!
          </Typography>
          <Divider
            sx={{
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#143a47",
              height: "3px",
            }}
          />
          <Typography
            component="p"
            sx={{
              fontSize: "12px",
              mr: 3,
              mt: 1,
              textAlign: "right",
              fontWeight: "500",
            }}
          >
            free shipping
          </Typography>
        </Stack>
        <Stack p={1} direction="row" sx={{ borderTop: "1px solid #acacac" }}>
          <Typography
            component="p"
            sx={{ fontSize: "16px", flexGrow: 1, margin: "1em 1.5em" }}
          >
            Shipping
          </Typography>
          <Typography
            component="p"
            sx={{
              color: (theme) => theme.palette.secondary.dark,
              fontSize: "14px",
              margin: "1em 1.5em",
            }}
          >
            FREE
          </Typography>
        </Stack>
        <Stack p={1} sx={{ borderTop: "1px solid #acacac" }}>
          <Stack direction="row">
            <Typography
              component="h6"
              variant="h6"
              sx={{
                flexGrow: 1,
                margin: "1em 1.5em 0 1.5em",
                fontSize: "17px",
              }}
            >
              Subtotal
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ margin: "1em 1.5em 0 1.5em", fontSize: "17px" }}
            >
              ${total.toLocaleString()}
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ mt: 3, borderRadius: "0px", p: 2 }} onClick={addToCart}>
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartFooter;
