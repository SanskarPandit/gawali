
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
const Help = () => {
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
          onClick={() => navigate('/support')}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>Help</Typography>
      </Toolbar>
    </AppBar>
    <Box sx={{display:'flex'}}>
        <Grid item width={'100%'}>

        <Typography variant="body1"  sx={{color:'#8B8989',fontSize:'1.1rem',p:1,mt:2,ml:1}}>I want to ?</Typography>
        <Box sx={{p:1}}>

              <Paper  sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 3,pr: 1,borderRadius: 1,}} >
               <Typography variant="body1" fontSize={'1.1rem'}>Place an order</Typography>
              </Paper>
              <Paper  sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 3,pr: 1,borderRadius: 1,}} >
               <Typography variant="body1" fontSize={'1.1rem'}>Add a vacation</Typography>
              </Paper>
              <Paper elevation={1} sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 3,pr: 1,borderRadius: 1,}} >
               <Typography variant="body1" fontSize={'1.1rem'}>Recharge my wallet</Typography>
               </Paper>
               <Paper elevation={1} sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 3,pr: 1,borderRadius: 1,}} >
               <Typography variant="body1" fontSize={'1.1rem'}>Payment History</Typography>
               </Paper>
               <Paper elevation={1} sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 3,pr: 1,borderRadius: 1,}} >
               <Typography variant="body1" fontSize={'1.1rem'}>View my bill</Typography>
               </Paper>
              </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Help