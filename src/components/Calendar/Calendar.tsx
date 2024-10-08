import React,{ useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Typography,
  Grid,
  Box,
  Button
} from "@mui/material";
import { ArrowBack, ArrowForward, } from '@mui/icons-material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  const navigate=useNavigate();
  const [currentMonth, setCurrentMonth] = useState<number>(1); // February (0-based index)
  const [currentYear, setCurrentYear] = useState<number>(2024);

  const monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number): number => new Date(year, month, 1).getDay();

  const handlePrevMonth = (): void => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prevYear => prevYear - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = (): void => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prevYear => prevYear + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const getCurrentDate = (): { day: number; month: number; year: number } => {
    const today = new Date();
    return {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
    };
  };

  const { day: currentDay, month: currentMonthActual, year: currentYearActual } = getCurrentDate();
  const renderDays = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays: number = daysInMonth(currentMonth, currentYear);
    const firstDay: number = firstDayOfMonth(currentMonth, currentYear);
    const statuses: string[] = [
      'Delivered', 'Delivered', 'Delivered', 'Delivered', 'Delivered', 'Delivered', 'Delivered',
      'Delivered', 'Delivered', 'Delivered', 'Delivered', 'Delivered', 'Delivered',
      'Not Delivered', 'Delivered', 'Upcoming', 'Delivered', 'Upcoming', 'Upcoming', 'Upcoming',
      'Upcoming', 'Upcoming', 'Change Request', 'Delivered', 'Delivered', 'Delivered', 'Delivered'
    ]; // Example statuses
    const statusColors: { [key: string]: string } = {
      Delivered: '#65DA69',
      'Not Delivered': '#f44336',
      Upcoming: '#37C3FF', 
      'Change Request':"#B3B3B3"
    };

    // Add empty cells for days of the previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<Grid item xs={1} key={`empty-${i}`} sx={{ height: { xs: 50, sm: 60, md: 80 } }} />);
    }

    // Add cells for the current month
    for (let i = 1; i <= totalDays; i++) {
      const status: string = statuses[i - 1]; // Use the example statuses
      const isCurrentDate: boolean = currentDay === i && currentMonth === currentMonthActual && currentYear === currentYearActual;
      days.push(
        <Grid
          item
          xs={1}
          key={i}
          sx={{
           
            height: { xs: 50, sm: 60, md: 80 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            bgcolor: 'white',
            borderRadius: isCurrentDate ? '50%' : 'none',
            borderColor: isCurrentDate ? 'blue' : 'lightgrey',
            borderWidth: isCurrentDate ? 2 : 1
          }}
        >
          <Typography variant="body2" sx={{ color: 'black',fontSize:'1.1rem',fontWeight:100,mt:2,borderBottom:"6px solid", borderBottomColor:statusColors[status], width:'30px',borderBottomRadius:'5px'}}>{i}</Typography>
         
          <Typography variant="caption" sx={{mt:0.5,mb:2,fontSize:{lg:'1rem'},}}>1.5 ltr</Typography>

        </Grid>
      );
    }

    return days;
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
        <Typography  variant="body1" pl={3} sx={{fontSize: "20px"}}>Calendar</Typography>
      </Toolbar>
    </AppBar>

    <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
    <Box sx={{mr:{lg:30},ml:{lg:30}}}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{mt:3}}>
        <IconButton onClick={handlePrevMonth} sx={{ml:5}} >
          <ArrowBack sx={{color:"#37C3FF",fontSize:'1.6rem',border:'3px solid #37C3FF',borderRadius:'50px'}} />
        </IconButton>
        <Typography variant="h6">{`${monthNames[currentMonth]}-${currentYear}`}</Typography>
        <IconButton onClick={handleNextMonth} sx={{mr:5,}} >
          <ArrowForward sx={{color:"#37C3FF",border:'3px solid #37C3FF',borderRadius:'50px'}}/>
        </IconButton>
      </Box>
      </Box>
      <Grid container spacing={0} columns={7} sx={{ textAlign: 'center', bgcolor: 'white' }}>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>M</Typography></Grid>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>T</Typography></Grid>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>W</Typography></Grid>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>T</Typography></Grid>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>F</Typography></Grid>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>S</Typography></Grid>
        <Grid item xs={1}><Typography variant="caption" sx={{fontSize:{lg:'1rem'}}}>S</Typography></Grid>
      </Grid>
      <Grid container spacing={0} columns={7} sx={{ textAlign: 'center' }}>
        {renderDays()}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2} flexWrap="wrap">
        <Box display="flex" alignItems="center" mx={1}>
          <Box width={26} height={9} bgcolor="#4caf50" mr={1} borderRadius={50}/>
          <Typography variant="caption" fontSize={15}>Delivered</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={1}>
          <Box width={26} height={9} bgcolor="#f44336" mr={1} borderRadius={50} />
          <Typography variant="caption" fontSize={15}>Not Delivered</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={1}>
          <Box width={26} height={9} bgcolor="#37C3FF" mr={1} borderRadius={50}/>
          <Typography variant="caption"fontSize={15} >Upcoming</Typography>
        </Box>
      </Box>
    </Box>
    <Box>
      <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',mt:3}}>
      <Button variant="outlined" sx={{borderColor:"#10F6F6",color:"#10F6F6",borderWidth:'2px',borderRadius:4,fontSize:'1rem',fontWeight:'bold'}} onClick={()=> navigate('/vacation')}>Add Vacation</Button>
      </Box>
      <Box component='hr'></Box>
      <Box sx={{p:3}}>
        <Typography variant="h5" sx={{fontSize:"1.2rem",ml:2}}>{currentDay} {monthNames[currentMonth]} Today</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#E0E0E0', borderRadius: 2, padding: '6px 12px' }} >
        <Typography variant="h6" sx={{ color: 'black' }}>
          My Requests
        </Typography>
      </Box>
      <IconButton sx={{ backgroundColor: '#D9D9D9', width: 50, height: 50 }} onClick={()=>navigate('/request')}>
        <AddIcon style={{color:"black"}} />
      </IconButton>
    </  Box>
    </Box>
    </Box>
    </>
  );
};

export default Calendar;
