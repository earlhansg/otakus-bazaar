import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { styled, useTheme } from "@mui/system";
import { cartActions } from "../store/slices/cart-slice";

const pages = ["Limited", "Accesories", "Shop All"];

const StyledBadge = styled(Badge)<BadgeProps>(() => {
  const muiTheme = useTheme();

  return {
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${muiTheme.palette.background.paper}`,
      padding: "0 4px",
    },
  };
});

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar
          sx={{
            marginLeft: { lg: "15rem", md: "3rem", xs: "0" },
            marginRight: { lg: "15rem", md: "3rem", xs: "0" },
          }}
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              width: { md: "30%", xs: "90%" },
              display: { md: "flex", xs: "none" },
              justifyContent: "flex-start",
            }}
          >
            Otaku
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              width: "28%",
              justifyContent: "space-between",
              marginRight: "auto",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                component="a"
                sx={{ fontSize: "16px", fontWeight: 500, lineHeight: "2.1" }}
              >
                {page}
              </Typography>
            ))}
          </Box>
          <Button>Login</Button>

          <IconButton
            aria-label="cart"
            onClick={() => dispatch(cartActions.hideCart(true))}
          >
            <StyledBadge badgeContent={totalQuantity} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
