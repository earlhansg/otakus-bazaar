import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import WaterDrop from "@mui/icons-material/WaterDrop";
import FlagCircle from "@mui/icons-material/FlagCircle";
import Science from "@mui/icons-material/Science";
import { Product } from "../store/models/product.model";
import { findProductImage } from "./utils/findProductImage";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cart-slice";
import { RootState } from "../store";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: {
    md: "flex",
  },
};

type ItemModalProps = {
  item: Product;
};

export type MyModalHandles = {
  showModal: () => void;
};

export const ItemModal = forwardRef<MyModalHandles, ItemModalProps>(
  (props, ref) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const cartItems = useSelector((state: RootState) => state.cart.itemsList);

    const dispatch = useDispatch();
    const addToCart = () => {
      dispatch(
        cartActions.addToCart({
          ...props.item
        })
      );
    }

    useImperativeHandle(ref, () => ({
      showModal() {
        setOpen(true);
      },
    }));

    useEffect(() => {
      // This function will be executed after the component renders
      console.log('Component rendered', cartItems);
      return () => {
        console.log('Component unmounted');
        // Perform cleanup actions here
      };
    }, [cartItems]);

    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{zIndex:1200}}
        >
          <Box sx={style}>
            <Box sx={{ width: { md: "45%" } }}>
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h5"
                color="primary"
                sx={{ fontWeight: 500 }}
              >
                {props.item.name}
              </Typography>
              <Typography
                id="modal-modal-description"
                variant="h6"
                component="h6"
                sx={{ mt: 1 }}
                color="text.secondary"
              >
                ${props.item.price?.toLocaleString()}
              </Typography>
              <Typography
                id="modal-modal-title"
                component="p"
                sx={{ fontSize: "12px", fontStyle: "italic" }}
              >
                This item ships for free.
              </Typography>
              <Divider variant="inset" sx={{ marginLeft: "0px", mt: 2 }} />

              <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>

              <Stack
                direction={{ xs: "row" }}
                sx={{ alignItems: "center", mt: 3 }}
                spacing={1}
              >
                <WaterDrop />
                <Typography component="p" sx={{ lineHeight: "0" }}>
                  BPA-FREE WATER TANK
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "row" }}
                sx={{ alignItems: "center", mt: 3 }}
                spacing={1}
              >
                <Science />
                <Typography component="p" sx={{ lineHeight: "0" }}>
                  HANDBLOWN GLASS CARAFE
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "row" }}
                sx={{ alignItems: "center", mt: 3 }}
                spacing={1}
              >
                <FlagCircle />
                <Typography sx={{ lineHeight: "0" }}>
                  DESIGNED IN JAPAN
                </Typography>
              </Stack>

              <Button variant="contained" sx={{ mt: 3 }} onClick={addToCart}>
                Add to Cart
              </Button>
            </Box>
            <Box
              sx={{
                width: { md: "55%" },
                display: "flex",
                justifyContent: "end",
              }}
            >
              {props.item.imagePath && (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ width: "75%", justifyContent: "center" }}
                >
                  <img
                    src={findProductImage(props.item.imagePath)}
                    alt={props.item.name}
                    width="90%"
                    height="260px"
                  />
                </Stack>
              )}
            </Box>
          </Box>
        </Modal>
      </>
    );
  }
);
