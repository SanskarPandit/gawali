import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  CssBaseline,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import billsSummary from "../../utils/billsSummary";
import myBills from "../../utils/myBills";
import { useBills } from "../../context/BillsAuthContext";
const Bills = () => {
  const [openBillSummary, setOpenBillSummary] = useState(false);
  const [openBills, setOpenBills] = useState(false);
  const {bills} = useBills();
  const navigate = useNavigate()
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
          <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>Bills</Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} style={{ padding: 8 }}>
        <Grid item xs={6} sm={6} md={4} sx={{marginLeft:{lg:40}}}>
          <Card
            sx={{
              border: "2px dashed #000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            elevation={0}
          >
            <CardContent
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Typography variant="h6" align="center">
                &#x20B9; {bills.billedDetails.length==0? 0:bills.billedDetails}
              </Typography>
              <Typography
                variant="body2"
                fontSize={"1.1rem"}
                align="center"
                mt={0.5}
              >
                {" "}
                Billed
              </Typography>
              <Typography
                variant="body2"
                align="center"
                fontSize={"1rem"}
                mt={1}
              >
                Due Date:{" "}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                fontSize={"1.1rem"}
                mt={1}
              >
                31-Jan-2024
              </Typography>

              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#D2AB66",
                  border: "1px solid #000000",
                  color: "#000000",
                  borderRadius: "13px",
                  marginTop: 15,
                }}
                disableElevation
                onClick={()=>navigate('/payment')}
              >
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <Card
            sx={{
              border: "2px dashed #000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            elevation={0}
          >
            <CardContent
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Typography variant="h6" align="center">
                &#x20B9; {bills.totalOutstanding}
              </Typography>
              <Typography
                variant="body2"
                fontSize={"1.1rem"}
                align="center"
                mt={0.5}
              >
               Total Outstanding
              </Typography>
              <Typography
                variant="body2"
                align="center"
                fontSize={"1rem"}
                mt={1}
              >
                Details as of:{" "}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                fontSize={"1.1rem"}
                mt={1}
              >
                31-Apr-2024
              </Typography>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#D2AB66",
                  border: "1px solid #000000",
                  color: "#000000",
                  borderRadius: "13px",
                  marginTop: 15,
                }}
                disableElevation
                onClick={()=>navigate('/payment')}
              >
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    <Box sx={{backgroundColor:'#2A3B73',color:'#FFFFFF',mt:4,mb:4}}>
        <Typography variant="body2" p={1} align="center" fontSize={'1.2rem'}>Your Unbilled usage 28 Ltr. ₹ {bills.unBilledDetails.length==0?0:bills.unBilledDetails}</Typography>
    </Box>

      <Box>
        {/* Mybills */}
        <Box>
        <Box
          onClick={() => setOpenBills(!openBills)}
          sx={{ backgroundColor: openBills ? 'lightblue' : '#2A3B73', transition: 'background-color 0.3s ease', color:openBills?'#000000':"#FFFFFF",p:1, display: 'flex',justifyContent: 'center',alignItems: 'center',marginRight:{lg:50,md:50},marginLeft:{lg:50,md:50},mt:3,mb:3}}
        >
         <Typography variant="body2" sx={{ ml: 1,mr:'10px', }} fontSize={'1.3rem'}>
          {openBills ? 'Hide My Bills' : 'My Bills'}
        </Typography>
          {openBills ? <RemoveIcon sx={{border:'2px solid black',borderRadius:'50px'}} /> : <AddIcon sx={{border:'2px solid white',borderRadius:'50px'}}/>} 
         
      </Box>
      <Collapse in={openBills} sx={{marginRight:{lg:50,md:50},marginLeft:{lg:50,md:50}}}>
         <TableContainer component={Paper} sx={{p:1,boxShadow:3}}  >
        <Table sx={{marginTop:0,}}>
          <TableHead>
            <TableRow>
              <TableCell>SR</TableCell>
              <TableCell>Invoice No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myBills.map((row) => (
              <TableRow key={row.sr}>
                <TableCell>{row.sr}</TableCell>
                <TableCell>{row.invoiceNo}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Typography style={{ background: row.status === 'Paid' ? '#EBF9EB' : '#FDEBEB',color:row.status === 'Paid' ? '#3CC13B' : '#F03738',padding:1,border:row.status === 'Paid' ?'2px solid #3CC13B' :'2px solid #F03738', borderRadius:'9px' }} align="center">
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </Collapse>
         </Box>

         {/* Bills Summary */}
        <Box>
        <Box
          onClick={() => setOpenBillSummary(!openBillSummary)}
          sx={{ backgroundColor: openBillSummary ? 'lightblue' : '#2A3B73', transition: 'background-color 0.3s ease',mt:2, color:openBillSummary?'#000000':"#FFFFFF",p:1, display: 'flex',justifyContent: 'center',alignItems: 'center',marginRight:{lg:50,md:50},marginLeft:{lg:50,md:50}}}
        >
        <Typography variant="body2" sx={{ ml: 1,mr:'10px' }} fontSize={'1.3rem'} >
          {openBillSummary ? 'Hide Bills Summary' : 'Bills Summary'}
        </Typography>
           {openBillSummary ? <RemoveIcon sx={{border:'2px solid black',borderRadius:'50px'}} /> : <AddIcon sx={{border:'2px solid white',borderRadius:'50px'}}/>} 
      </Box>
        <Collapse in={openBillSummary} sx={{marginLeft:{lg:50,md:50},marginRight:{lg:50,md:50}}} >
          <TableContainer  sx={{marginTop:1,p:1,}}>
            <Table sx={{borderRadius:'20px',border:'2px solid #2A3B73'}}>
              <TableHead  >
                <TableRow sx={{backgroundColor:'#2A3B73'}}>
                  <TableCell sx={{color:'white',fontSize:'1.1rem'}}>SR</TableCell>
                  <TableCell sx={{color:'white',fontSize:'1.1rem'}}>Date</TableCell>
                  <TableCell sx={{color:'white',fontSize:'1.1rem'}}>Quantity</TableCell>
                  <TableCell sx={{color:'white',fontSize:'1.1rem'}}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {billsSummary.map((row) => (
                  <TableRow key={row.srno} >
                    <TableCell sx={{borderBottom:'2px dashed #C5B7B7',fontSize:'1rem'}}>{row.srno}</TableCell>
                    <TableCell sx={{borderBottom:'2px dashed #C5B7B7',fontSize:'1rem'}}>{row.date}</TableCell>
                    <TableCell sx={{borderBottom:'2px dashed #C5B7B7',fontSize:'1rem'}}>{row.quantity}</TableCell>
                    <TableCell sx={{borderBottom:'2px dashed #C5B7B7',fontSize:'1rem'}}>{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Collapse>
        </Box>
         
      </Box>
    </>
  );
};

export default Bills;
