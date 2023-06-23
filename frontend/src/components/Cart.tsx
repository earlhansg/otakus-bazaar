import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { ButtonGroup, IconButton, Stack, Typography } from "@mui/material";
import Clear from "@mui/icons-material/Clear";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { findProductImage } from "./utils/findProductImage";
import { CartItem, cartActions } from "../store/slices/cart-slice";

export type RemoveItem = "decrement" | "remove";

export default function Cart() {
  const showCart = useSelector((state: RootState) => state.cart.showCart);
  const cartItemList = useSelector((state: RootState) => state.cart.itemsList);
  const dispatch = useDispatch();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      dispatch(cartActions.hideCart(open));
    };

  const incrementCartItem = (item: CartItem) => {
    dispatch(
      cartActions.addToCart({
        ...item,
      })
    );
  };

  const decrementCartItem = (id: string, type: RemoveItem) => {
    dispatch(cartActions.removeFromCart({ id, type }));
  };

  const orderList = () => (
    <Box sx={{ width: "440px" }}>
      <Stack direction="row" sx={{ m: "1rem 2rem" }}>
        <Typography variant="h5" component="h5" sx={{ flex: 1 }}>
          Cart
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <Clear />
        </IconButton>
      </Stack>
      <Divider variant="inset" sx={{ marginLeft: "0px" }} />
      <Stack>
        {cartItemList.map((item) => (
          <Stack
            key={item._id}
            direction="row"
            sx={{ borderBottom: "1px solid #efecec" }}
          >
            <Stack sx={{ width: "30%" }} m={2}>
              <img
                src={findProductImage(item.imagePath)}
                alt="image"
                width="100%"
                height="100px"
              />
            </Stack>
            <Stack sx={{ m: "1rem", width: "25%" }} m={2}>
              <Typography variant="h6" component="h6" sx={{ fontSize: "17px" }}>
                {item.name}
              </Typography>
              <Typography component="p" sx={{ fontSize: "14px", mb: 2 }}>
                White
              </Typography>
              <Stack sx={{ width: "30%" }}>
                <ButtonGroup variant="outlined" sx={{ height: "30px" }}>
                  <Button
                    onClick={() => decrementCartItem(item._id, "decrement")}
                  >
                    <RemoveOutlinedIcon />
                  </Button>
                  <Button disabled>{item.quantity}</Button>
                  <Button onClick={() => incrementCartItem(item)}>
                    <AddOutlinedIcon />
                  </Button>
                </ButtonGroup>
              </Stack>
            </Stack>
            <Stack sx={{ width: "55%" }} m={2}>
              <IconButton
                sx={{ alignSelf: "end", mr: 2 }}
                onClick={() => decrementCartItem(item._id, "remove")}
              >
                <Clear sx={{ width: "1rem", height: "1rem" }} />
              </IconButton>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontSize: "15px",
                  alignSelf: "end",
                  marginTop: "1rem",
                  marginRight: "1.5rem",
                }}
              >
                ${item.totalPrice.toLocaleString()}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={showCart} onClose={toggleDrawer(false)}>
        {orderList()}
      </Drawer>
    </div>
  );
}
