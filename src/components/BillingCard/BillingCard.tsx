
import { Card, CardContent, Typography, Box, Grid,Button } from '@mui/material';
import CircularGraph from '../CircularGraph/CircularGraph';
import { useNavigate } from 'react-router-dom';

interface BillingCardProps {
  title: string;
  monthYear: string;
  quantityValue: number;
  amountValue: number;
  daysValue: number;
  quantityColors: string[];
  amountColors: string[];
  daysColors: string[];
  quantityStatus: string;
  amountStatus: string;
  daysStatus: string;
  button: string;
}
const BillingCard = ({ title,
  monthYear,
  quantityValue,
  amountValue,
  daysValue,
  quantityColors,
  amountColors,
  daysColors,
  quantityStatus,
  amountStatus,
  daysStatus,
  button,}:BillingCardProps) => {
    const navigate=useNavigate()
  return (
    <Card sx={{ margin: {lg:'20px',xs:'1px'}, mt:{xs:2},borderRadius:2,boxShadow:2,pr:1,}}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="h5" sx={{color:"#000066",fontWeight:200,fontSize:'1.4rem',ml:2,mt:2}}>{title}</Typography>
          <Box
            sx={{
              bgcolor: '#2D9CDB',
              color: 'white',
              borderRadius: 5,
              marginTop: { xs: '10px', md: '0' },
              pl:1,
              pr:1,
              mr:1,
              mt:{lg:2,xs:2}
            }}
          >
            {monthYear}
          </Box>
        </Box>
        <Box sx={{borderBottom: '1px solid #8A8888', width: '100%', marginTop: '10px'}}></Box>
      </Box>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            <Typography variant="h6" align="center" sx={{fontSize:{xs:'1.2rem',lg:'1.5rem'},color:"#000066",ml:1}}>
              Quantity
            </Typography>
            <CircularGraph dataValue={quantityValue} colors={quantityColors} label="Quantity" quantityStatus={quantityStatus} unit="Liters"/>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" align="center" sx={{fontSize:{xs:'1.2rem',lg:'1.5rem'},color:"#000066",ml:1}}>
              Amount
            </Typography>
            <CircularGraph dataValue={amountValue} colors={amountColors} label="Amount" amountStatus={amountStatus} prefix="₹" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" align="center" sx={{fontSize:{xs:'1.2rem',lg:'1.5rem'},color:"#000066",ml:1}}>
              Days
            </Typography>
            <CircularGraph dataValue={daysValue} colors={daysColors} label="Days" daysStatus={daysStatus} unit="Days"/>
          </Grid>
        </Grid>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {title === 'Current Billed (Unbilled)' && (
              <>
            <Button variant='outlined' sx={{mt:2}} onClick={()=>navigate('/calendar')}><Typography variant='h6' sx={{fontSize:"1rem"}} >{button}</Typography></Button>
        
          <Typography variant='h6' sx={{fontSize:"0.8rem",color:'#F94E4E',mt:1}} >Note: Above details are till today i.e. 10 June 2022</Typography>
              </>
      )}
  {title === 'Previous Month (Billed)' && (
              <>
            <Button variant='outlined' sx={{mt:2}} onClick={()=>navigate('/bills')}><Typography variant='h6' sx={{fontSize:"1rem"}} >{button}</Typography></Button>
            </>

      )}
          </Box>
      </CardContent>
    </Card>
  );
};

export default BillingCard;
