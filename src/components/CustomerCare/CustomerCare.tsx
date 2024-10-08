
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
import { supportCall } from "../../constants/icons";

const CustomerCare = () => {
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
        <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>Customer Care</Typography>
      </Toolbar>
    </AppBar>

    <Box sx={{display:'flex',marginTop:3}}>
        <Grid item width={'100%'}>
        <Box sx={{p:1}}>
              <Paper  sx={{display: 'flex',backgroundColor: "#FFFFFF",borderRadius: 1,}}>
                <img src={supportCall} width={37} style={{marginLeft:'23px',marginBottom:'35px'}}/>
                <Box>
                <Grid item sx={{p:2,display:'flex',flexDirection:'column'}}>
               <Typography variant="h5" sx={{fontSize:'1.2rem',borderBottom:"2px solid #B6B6B6"}}>Customer Support Helpline</Typography>
              <Box sx={{mt:2}}>
               <Typography variant="h6" sx={{fontSize:'1rem',color:'#666666'}}>+91 9850929698 <span  style={{fontSize:'13px'}}>(6am to 9pm everyday)</span></Typography>
               <Typography variant="h6" sx={{fontSize:'1rem',color:'#666666'}}>+91 9850929698 <span style={{fontSize:'13px'}}>(6am to 9pm everyday)</span></Typography>
              </Box>
                </Grid>
                </Box>
              </Paper>
              </Box>
              </Grid>
    </Box>
    </Box>
  )
}

export default CustomerCare