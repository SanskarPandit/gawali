import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  CssBaseline,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { luggage } from "../../constants/icons";
const Vacation = () => {
  const navigate = useNavigate();
  const [addVactions, setAddVacations] = useState(false);
  return (
    <>
      <CssBaseline />
      {addVactions ? (
        <Box>
           <AppBar
            position="static"
            sx={{
              backgroundColor: "#0019A5",
              mb: 1,
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={() => setAddVacations(false)}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="body1"
                pl={3}
                sx={{ fontSize: "20px", flexGrow: 2 }}
              >
                Add Vacations
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={() => setAddVacations(true)}
              >
                <AddIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Toolbar>
          </AppBar>
  
        </Box>
      ) : (
        <Box>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#0019A5",
              mb: 1,
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="body1"
                pl={3}
                sx={{ fontSize: "20px", flexGrow: 2 }}
              >
                Vacations
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={() => navigate("/dashboard")}
              >
                <AddIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid item component={Box} display="flex" flexDirection="column">
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                marginLeft: { lg: 30, sm: 9 },
                marginRight: { lg: 30, sm: 9 },
                paddingRight: { lg: 30, sm: 9 },
                paddingLeft: { lg: 30, sm: 9 },
                marginTop: { lg: 10, sm: 20 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
<Box component="img"
                  src={luggage}
                  alt="Luggage"
                  width={50}
                  height={50}
                  style={{
                    width: '50%', // Set a default width
                    height: 'auto', // Maintain aspect ratio
                  }}
                  sx={{
                    width: { lg: 350, md: 200, xs: 200 },
                    height: { lg: 350, md: 250, xs: 250 },
                  }}
                />
              </Box>
              <Box onClick={()=>setAddVacations(true)} sx={{ mr: { lg: 20 }, ml: { lg: 20 } }} >
                <Typography
                  variant="h5"
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#03A9F4",
                    fontSize: { md: "2rem", lg: "1.5rem" },
                    cursor:'pointer'
                  }}
                >
                  Add Vacation +
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Vacation
