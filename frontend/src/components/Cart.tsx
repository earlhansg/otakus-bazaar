import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { ButtonGroup, IconButton, Stack, Typography } from "@mui/material";
import Clear from "@mui/icons-material/Clear";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import image from '../images/07ca19a4-4ab6-45ea-8b6b-7b37d3c8e9e4.png'

export default function Cart() {
  const [state, setState] = useState(true);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const orderList = () => (
    <Box sx={{ width: "440px" }}>
      <Stack direction="row" sx={{ m: "1rem 2rem" }}>
        <Typography variant="h5" component="h5" sx={{ flex: 1 }}>
          Cart
        </Typography>
        <IconButton>
          <Clear />
        </IconButton>
      </Stack>
      <Divider variant="inset" sx={{ marginLeft: "0px" }} />
      <Stack direction="row" sx={{ borderBottom: "1px solid #efecec" }}>
        <Stack sx={{ width: "30%" }} m={2}>
          <img
            src={image}
            alt="image"
            width="100%"
            height="100px"
          />
        </Stack>
        <Stack sx={{ m: "1rem", width: "25%" }} m={2}>
          <Typography variant="h6" component="h6" sx={{ fontSize: "17px" }}>
            Ratio Eight
          </Typography>
          <Typography component="p" sx={{ fontSize: "14px", mb:2 }}>
            White
          </Typography>
          <Stack sx={{ width: "30%" }}>
            <ButtonGroup variant="outlined" sx={{ height: "30px" }}>
              <Button>
                <RemoveOutlinedIcon />
              </Button>
              <Button disabled></Button>
              <Button>
                <AddOutlinedIcon />
              </Button>
            </ButtonGroup>
          </Stack>
        </Stack>
        <Stack sx={{ width: "55%" }} m={2}>
          <IconButton sx={{ alignSelf: "end", mr: 2 }}>
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
            $339.00
          </Typography>
        </Stack>
        
      {/* <Divider variant="inset" sx={{ marginLeft: "0px" }} /> */}
      </Stack>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open</Button>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {orderList()}
      </Drawer>
    </div>
  );
}
