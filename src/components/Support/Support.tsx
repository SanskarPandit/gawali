import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  CssBaseline,
  Paper
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

const Support = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{backgroundColor:'#F0F0F0',height: "100vh"}}>
      <CssBaseline />
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
            onClick={() => navigate('/dashboard')}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>Support</Typography>
        </Toolbar>
      </AppBar>
          <Box sx={{display:'flex',mr:{lg:35},ml:{lg:35},mt:{lg:3}}}>
            <Grid item width={'100%'} >
              <Box sx={{p:2}}>
              <Paper  sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 2,pr: 1,borderRadius: 1,}} onClick={()=>navigate('/help')} >
               <Typography variant="body1" fontSize={'1.1rem'}> Help on How to use the app ?</Typography>
               <ChevronRight   />
              </Paper>
              <Paper  sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 2,pr: 1,borderRadius: 1,}} onClick={()=>navigate('/raise-complaint')} >
               <Typography variant="body1" fontSize={'1.1rem'}> Raise a complaint ?</Typography>
               <ChevronRight   />
              </Paper>
              <Paper elevation={1} sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 2,pr: 1,borderRadius: 1,}}onClick={()=>navigate('/customer-care')} >
               <Typography variant="body1" fontSize={'1.1rem'}>Speak to our customer care ?</Typography>
               <ChevronRight/>
              </Paper>
              </Box>
            </Grid>
          </Box>
        </Box>
    )
}

export default Support