
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from '@mui/material/Avatar';
import profilePic from '../../assets/avatar.jpg'
import Badge from '@mui/material/Badge';
import { editIcon } from "../../constants/icons";
import { styled } from '@mui/material/styles';
import { usePersonalDetails } from "../../context/PersonalDetailsContext";
// import { useContext } from "react";
// import UserContext from "../../context/UserContext";

const EditIcon = styled(Avatar)(() => ({
  width: 32,
  height: 32,  
}));

const Profile = () => {
    const navigate = useNavigate();
    // const {user} = useContext(UserContext)
    const {personalDetails} =usePersonalDetails()

    
    return (
      <Box>
 <CssBaseline />
      <AppBar position="static" sx={{backgroundColor: "#0019A5",mb: 1,}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back"onClick={() => navigate('/dashboard')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>My Profile</Typography>
        </Toolbar>
      </AppBar>
      <Box p={2} >
        <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Box>
            <Badge badgeContent={<EditIcon src={editIcon}></EditIcon>} overlap="circular"anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Avatar alt="Profile pic" src={profilePic} sx={{ width:{lg:120,md:100,xs:95}, height:{lg:120,md:100,xs:95}}}></Avatar>
            </Badge>
          </Box>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:"space-between",ml:4}}>
                <Typography variant='h5' sx={{fontFamily:'Montserrat',fontSize:'1.2rem'}}>{personalDetails.name||"No name available"}</Typography>
                <Typography variant='body1'sx={{fontFamily:'Montserrat',fontSize:'0.9rem'}}>{personalDetails.email||"No email available"}</Typography>
                <Typography variant='body1'sx={{fontFamily:'Montserrat',fontSize:'0.9rem'}}>{personalDetails.phoneNumber||"No phone number available"}</Typography>
                </Box>
                <Stack spacing={4} my={2}>

                <Box component="form">
                  <Box sx={{mr:{lg:60},ml:{lg:60}}}>
                    <TextField label="Full Name" fullWidth InputProps={{readOnly: true,}}  sx={{mt:3,}} value={personalDetails.name}/>
                    <TextField label="Phone Number" fullWidth InputProps={{readOnly: true,}} value={personalDetails.phoneNumber} sx={{mt:3}}/>
                    <TextField label="Alt. Phone Number" fullWidth InputProps={{readOnly: true,}} value={personalDetails.phoneNumber} sx={{mt:3}}/>
                    <TextField label="Email" fullWidth InputProps={{readOnly: true,}} value={personalDetails.email} sx={{mt:3}}/>
                    <TextField label="Flat No./House No./Building" fullWidth InputProps={{readOnly: true,}} value={personalDetails.address} sx={{mt:3}}/>
                    <TextField label="Aread Pincode" fullWidth InputProps={{readOnly: true,}} value={personalDetails.area_pin_code} sx={{mt:3}}/>
                    <TextField label="Route" fullWidth InputProps={{readOnly: true,}} value={personalDetails.routeName} sx={{mt:3}}/>
                    <TextField label="City" fullWidth InputProps={{readOnly: true,}} value={personalDetails.address} sx={{mt:3}}/>
                    <TextField label="Locality" fullWidth InputProps={{readOnly: true,}} value={personalDetails.address} sx={{mt:3}} />
                  </Box>

                    <Box sx={{mr:{lg:60},ml:{lg:60}}}>
                    <Typography variant='body1'sx={{fontFamily:'Montserrat',fontSize:'0.9rem',mt:1}}>Delivery Instructions</Typography>
                    <Typography variant='body1'sx={{fontSize:'1rem'}}>{personalDetails.deliveryInstructions}</Typography>
                    </Box>
                    <Box sx={{ mr:{lg:60},ml:{lg:60}}}>
                  <Button type="submit" fullWidth variant="contained" sx={{mt:3,borderRadius:2,backgroundColor:"#0081CD",mb:3,}}>Update</Button>           
                    </Box>
               </Box>
                </Stack>
     </Grid>
  </Box>
</Box>
    )
}

export default Profile