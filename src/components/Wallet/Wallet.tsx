
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  CssBaseline,
  CardContent,
  CardHeader,
  Card,
  Input,
  FormControl,
  InputAdornment,
  Button,
  Paper
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { purse } from "../../constants/icons";

const Wallet = () => {
  const navigate = useNavigate();
  const transactions = [
    { date: "February 07, 2021", method: "Cash", amount: 1500 },
    { date: "February 07, 2021", method: "Google Pay", amount: 5000 },
    { date: "February 07, 2021", method: "PayTm", amount: 500 },
  ];
  return (
    <Box>
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
            onClick={() => navigate("/dashboard")}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="body1" pl={3} sx={{ fontSize: "21px", flexGrow: 1 }}>
            Wallet
          </Typography>
          <Box sx={{ border: "2px solid #FFFFFF", p: 1, borderRadius: 2 }}>
            <Typography variant="body1" sx={{ color: "#FF2E2E", fontSize: "17px" }}>
              <span style={{ color: "#FFFFFF" }}>₹</span> - 9760
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
        <Box sx={{mr:{lg:20},ml:{lg:20}}}>

      <Box sx={{ p:2, backgroundColor: "#F3F6FB",mt:3,mr:{lg:50},ml:{lg:50} }}>
        <Grid container alignItems="center">
          <Grid item xs={1} >
            <img src={purse} alt="" style={{marginLeft:"10px"}} width={80}/>
          </Grid>
          <Grid item xs={11}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box sx={{ textAlign: "left",mr:4 }}>
                <Typography variant="h5" sx={{fontSize:'1.5rem'}}>BALANCE</Typography>
                <Typography sx={{ color: "#FF2E2E",fontSize:'1.8rem' }} variant="h5">
                  <span style={{ color: "#000000" }}>₹</span> - 9760
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
          <Grid p={2}>
            <Card sx={{backgroundColor:"#FAFAFA",mr:{lg:15},ml:{lg:15}}} elevation={3} >
            <CardHeader
        title={<Typography variant="body1" sx={{color:'#ACABAB'}}>Add Money to Wallet</Typography>} sx={{borderBottom:'1px solid #E8E3E3'}}/>
                <CardContent>
                        <Box sx={{border:"2px solid #45A388",borderRadius:2}}>
                          <FormControl fullWidth sx={{ m: 1,p:2 }} variant="standard">
                          <Input sx={{mr:10,ml:10}} startAdornment={<InputAdornment position="start" sx={{color:"#000000",}}><span style={{fontSize:'1.7rem'}}>₹</span></InputAdornment>} placeholder="Enter Amount" type="number"/>
                          </FormControl>
                        </Box>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',p:2}}>
                            <Box sx={{backgroundColor:"#F4F5F8",border:"1px solid #ABA5A5",pt:1,pb:1,pr:2,pl:2,borderRadius:1}}><Typography>₹500</Typography></Box>
                            <Box sx={{backgroundColor:"#F4F5F8",border:"1px solid #ABA5A5",pt:1,pb:1,pr:2,pl:2,borderRadius:1}}><Typography>₹500</Typography></Box>
                            <Box sx={{backgroundColor:"#F4F5F8",border:"1px solid #ABA5A5",pt:1,pb:1,pr:2,pl:2,borderRadius:1}}><Typography>₹500</Typography></Box>
                            <Box sx={{backgroundColor:"#F4F5F8",border:"1px solid #ABA5A5",pt:1,pb:1,pr:2,pl:2,borderRadius:1}}><Typography>₹500</Typography></Box>
                        </Box>
                </CardContent>
            </Card>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:3}}>
                <Button variant="contained" sx={{backgroundColor:'#2196F3',"&:hover":{backgroundColor:'#2196F3'}}}>Add Money</Button>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant="body1" sx={{border:'1px solid #000000',borderRadius:1,p:1,fontSize:'1.3rem',fontWeight:100}}>Wallet Credit History</Typography>
            </Box>
           <Box sx={{mt:4}}>
           {transactions.map((item)=>(
            <Paper elevation={4} sx={{p: 2,display:'flex',justifyContent:'space-between',alignItems:'center',border:'1px solid #C2C2C2',mr:{lg:15},ml:{lg:15}}}>
                <Box>
                 <Typography variant="body1">{item.date}</Typography>
                 <Typography variant="body2" color="textSecondary" fontFamily={'Roboto Slab'}>{item.method}</Typography>
                 </Box>
      <Box
        sx={{
          backgroundColor: "#CBFDCC",
          color: "#369D3A",
          borderRadius: 1,
          px: 1.5,
          py: 0.5,
          display: "flex",
          alignItems: "center",
          border:"1px solid #CBCBCB"
        }}>
        <Typography variant="body1">₹ {item.amount}</Typography>
      </Box>
     </Paper>
        ))}
           </Box>
    </Grid>
    </Box>
        </Box>
  );
};

export default Wallet;
