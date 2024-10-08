
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fab
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useRequests } from "../../context/RequestsContext";

const Requests = () => {
  const navigate = useNavigate();
  const {requests} = useRequests();
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Rejected':
        return { backgroundColor: '#FDEBEB', border: '1px solid #F03738', color: '#F03738',borderRadius:1 };
      case 'Approved':
        return { backgroundColor: '#EBF9EB', border: '1px solid #3CC13B', color: '#3CC13B',borderRadius:1};
      case 'Pending':
        return { backgroundColor: '#FEF8E8', border: '1px solid #F3BB1C', color: '#F3BB1C',borderRadius:1 };
      default:
        return {};
    }
  };
    const renderTable = (title: string, data: any)=>(
     <Box>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', ml: 2, mt: 2 }}>{title}</Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2, border: '1px solid #B8B8B8', mt: 2 ,maxWidth: 400,mx:'auto'  }} elevation={0}>
              <Table size="small">
                <TableHead >
                  <TableRow>
                    <TableCell sx={{ color: "#808080",fontSize:'0.9rem', padding: 1 }}>Sr.</TableCell>
                    <TableCell sx={{ color: "#808080",fontSize:'0.9rem', padding: 1}}>Date</TableCell>
                    <TableCell sx={{ color: "#808080",fontSize:'0.9rem', padding: 1}}>From</TableCell>
                    <TableCell sx={{ color: "#808080",fontSize:'0.9rem', padding: 1}}>To</TableCell>
                    <TableCell sx={{ color: "#808080",fontSize:'0.9rem', padding: 1}}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row: any) => (
                    <TableRow key={row.sr}> 
                      <TableCell sx={{fontSize:'0.8rem'}}>{row.sr}</TableCell>
                      <TableCell sx={{fontSize:'0.8rem'}}>{row.date}</TableCell>
                      <TableCell sx={{fontSize:'0.8rem'}}>{row.from}</TableCell>
                      <TableCell sx={{fontSize:'0.8rem'}}>{row.to}</TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            fontWeight: 'bold',
                            paddingLeft:'2px',
                            paddingRight:'2px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                          }}
                          sx={getStatusStyles(row.status)}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </Box>
    )
  return (
    <Box >
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
          <Typography variant="body1" pl={3} sx={{ fontSize: "20px" }}>My Requests</Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
        
            {requests.milkQuantityRequests.length==0?<Typography sx={{mt:3,fontSize:'1.3rem'}}>No records in Milk Quantity Requests</Typography>:renderTable('Milk Quantity Request',requests.milkQuantityRequests||'No records available')}
            {requests.milkQualityComplaints.length==0?<Typography sx={{mt:3,fontSize:'1.3rem'}}>No records in Milk Quality Complaints</Typography>:renderTable('Milk Quality Complaints',requests.milkQualityComplaints||'No records available')}
            {requests.paymentComplaints.length==0?<Typography sx={{mt:3,fontSize:'1.3rem'}}>No records in Payment Complaints</Typography>:renderTable('Payment Complaints',requests.paymentComplaints)}
          </Grid>
        </Grid>
        <Box sx={{display:"flex",alignItems:'center',justifyContent:'center',flexDirection:'column',mt:3}} >
        <Fab color="primary" aria-label="add" sx={{mb:1}} onClick={()=>navigate('/support')}>
          <AddIcon />
        </Fab>
        <Typography variant="h5" fontSize={'1.1rem'} sx={{mb:3,mt:2}} >Raise a new Request/Complaint</Typography>
      </Box>
      </Box>
    </Box>
  );
}

export default Requests;