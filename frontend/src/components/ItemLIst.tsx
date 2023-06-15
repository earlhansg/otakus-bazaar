
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import zorro from "../images/zorro.png";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";

type Item = {
  id: number;
  focus: boolean;
};

export default function ItemLIst() {
  const [isHovering, setIsHovering] = useState<Item | null>(null);

  const handleMouseOver = (id: number) => {
    console.log("handleMouseOver", id);
    const focus = true;
    setIsHovering({ id, focus });
  };

  const handleMouseOut = (id: number) => {
    console.log("handleMouseOut", id);
    setIsHovering(null);
  };
  return (
    <Box
      mt="3"
      sx={{
        marginLeft: { lg: "15rem", xs: "0" },
        marginRight: { lg: "15rem", xs: "0" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={3} sm={6} xs={12}>
          <Box m="auto"
            sx={{ position: "relative", width: {md:"100%", xs:"80%"} }}
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={() => handleMouseOut(1)}
          >
            {isHovering?.id === 1 ? (
              <Fade in={isHovering.focus}>
                <Fab
                  color="primary"
                  aria-label="add"
                  sx={{ position: "absolute", right: "0", top: "-20px" }}
                >
                  View
                </Fab>
              </Fade>
            ) : null}
            <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
              <img src={zorro} alt="image" width="100%" height="100%" />
            </Stack>
            <Typography
              mt={1}
              sx={{ fontSize: 19, fontWeight: 500 }}
              color="text.secondary"
              gutterBottom
            >
              First Collection
            </Typography>
            <Stack sx={{ alignItems: "center" }}>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
                sx={{ color: "#43616b" }}
              />
            </Stack>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              (209 Previews)
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              $645.00
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
