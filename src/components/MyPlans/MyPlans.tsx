import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  Button,
  CssBaseline,
  Tabs, Tab 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from '@mui/icons-material/Remove';
import { buffalo } from "../../constants/icons";
import AddIcon from '@mui/icons-material/Add';
import tabs from "../../utils/tabs";
import { usePlan } from "../../context/PlansContext";

const MyPlans = () => {
    const navigate=useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);
    const [closeReminder,setCloseReminder] =useState(true)
  const {plan} = usePlan()
    const handleClose = () => {
      setCloseReminder(false);
    };
    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
    };
  
    return (
       <>
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
          <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>My Plan</Typography>
        </Toolbar>
      </AppBar>

        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',p:{lg:2,md:2} }}>
        <Tabs value={selectedTab} onChange={handleTabChange} sx={{ '.MuiTabs-indicator':{display:'none'} }}>
        {tabs.map((label, index) => (
          <Tab
            key={label}
            label={label}
            sx={{
              mt:2,
              border:'1px solid #E0E0E0',
              '&.Mui-selected': {
                backgroundColor: '#DFF2E6',
                color:'#099941',
              },
              '&:hover': {
                backgroundColor: selectedTab !== index ? '#DFF2E6' : '#DFF2E6',
              },
            }}
          />
        ))}
      </Tabs>
   {plan.availablePlans.length==0?
   <Typography variant="h5" sx={{mt:5,color:'red'}}>No plan selected !</Typography>
   :
   (plan.availablePlans.map(()=>(
      <Card elevation={0} sx={{ margin:'auto',mt:5,border:'1px solid #E0E0E0',display: 'flex',alignItems:'center',justifyContent:'center',pl:{lg:5,md:5},pr:{lg:5,md:5,xs:4},}}>
      <Box sx={{ mr:2,p:1}}>
       <img src={buffalo} width='150' height='150'  alt="buffalo image"/>
      </Box>
      <Box sx={{ flex: 1,pl:{lg:5,md:5,},pr:{lg:5,md:5,},}}>
        <Typography variant="h6">{plan.activePlans}</Typography>
        <Typography variant="body2" sx={{color:'#686868'}}>Superior Quality</Typography> {/* Replace with actual price */}

        <Typography variant="subtitle1">₹ 50/ Liter </Typography> {/* Replace with actual price */}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl:{lg:2,md:2,xs:'8px'},pr:{lg:2,md:2,},mb:6}}>
        <Box sx={{ mb: 1,border:'2px solid #E0E0E0',backgroundColor:"#15AD00",color:'#FFFFFF',borderRadius:1,fontSize:'0.8rem',p:{lg:'4px',md:'4px',xs:'5px'}   }}>
          Current Plan
        </Box>
        <Button disableElevation variant="contained" sx={{p:{lg:'4px',md:'4px',xs:0.4},backgroundColor:"#EE2727",color:'#FFFFFF',borderColor:'#FFFFFF','&:hover':{backgroundColor:"#EE2727",color:'#FFFFFF',borderColor:'#FFFFFF'}}} startIcon={<RemoveIcon  />} onClick={handleClose}>
         <Typography variant="body1"> Remove</Typography>
        </Button>
      </Box>
    </Card>)
   ))
      
   }
 {
      !closeReminder&&
      <Typography variant='h6'sx={{mt:8,color:"red"}}>You do not have any active plans!</Typography>
    }
       </Box>   

       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:8}}>
            <Typography variant="body2" sx={{fontSize:'1.5rem',color:'#000000'}}>Add Milk Products to your Plan</Typography>
            <IconButton
        sx={{
          mt: 2,
          bgcolor: '#2D9CDB',
          color: 'white',
          '&:hover': {
            bgcolor: '#1889CA',
          },
          width: 60,
          height: 60,
          borderRadius: '50%',
        }}
        onClick={()=>navigate('/products')}
      >
        <AddIcon sx={{fontSize:'40px'}}  />
      </IconButton>
       </Box>
       </>
    )
}

export default MyPlans