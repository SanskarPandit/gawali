import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  CssBaseline,
  Paper,
  Tabs, 
  Tab ,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import orderTabs from "../../utils/orderTabs";
const Orders = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange =  (_event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
    }
    
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
            <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>My Orders</Typography>
          </Toolbar>
        </AppBar>
            <Box sx={{display:'flex',p:3,justifyContent:' center',alignItems:' center'}}>
              <Grid item width={'100%'} >
              <Paper  sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundColor: "#FFFFFF",mb: 2,pt: 2,pb: 2,pl: 2,pr: 1,borderRadius: 1,}}>
                 <Typography variant="h6" fontSize={"1.1rem"}>30th Jan - 1st Mar, 2021</Typography>
              </Paper>

          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Tabs value={selectedTab} onChange={handleTabChange} sx={{ '.MuiTabs-indicator': { display: 'none' },}}>
          {orderTabs.map((label, index) => (
            <Tab
              key={label}
              label={label}
              sx={{
                mt: 2,
                backgroundColor:'#FFFFFF',
                border: '1px solid #ACACAC',
                borderRadius:2,
                '&.Mui-selected': {
                  backgroundColor: '#DFF2E6',
                  color: '#099941',
                },
                '&:hover': {
                  backgroundColor: selectedTab !== index ? '#DFF2E6' : '#DFF2E6',
                },
                mr:1,
                ml:'3px'
              }}/>
          ))}
          </Tabs>
          </Box>
              
      <Typography variant="body1" sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:3,fontSize:'1.2rem',color:'#F04141'}}>No orders found.</Typography>
      </Grid>
     </Box>
        </Box>
    )
}

export default Orders