import { Box, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);
interface CircularGraphProps {
  dataValue: number;
  colors: string[];
  label: string; // This must be added to fix the error
  daysStatus?: string; // Optional props
  amountStatus?: string; // Optional props
  quantityStatus?: string; // Optional props
  unit?: string; // Optional props
  prefix?: string; // Optional props
}

const CircularGraph = ({ dataValue, colors,label,daysStatus,amountStatus,quantityStatus,unit,prefix }:CircularGraphProps) => {
  const remainingValue = 100 - dataValue;
                                                          
  const data = {
    datasets: [
      {
        data: [dataValue, remainingValue],
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '85%',
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Box sx={{ width: {xs:110,lg:150}, height: {xs:117,lg:150}, position: 'relative',ml:{lg:4} }}>
      <Doughnut data={data} options={options}  />
       <Box
       sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
      }}
      >
     <Typography variant="h6" sx={{ color: colors[0], fontSize: {xs:'0.86rem',lg:'1.1rem'} }}>
     <span>{prefix}</span> {dataValue}<Box component='span' sx={{ fontSize: { xs: '10px', lg: '15px' } }}>{unit}</Box>
        </Typography>
        <Typography variant='body1' sx={{fontSize:{xs:'0.8rem',lg:'1rem'},color:"#91C90E",fontWeight:300}}>{quantityStatus}</Typography>
        <Typography variant='body1' sx={{fontSize:{xs:'0.8rem',lg:'1rem'},color:"#91C90E",fontWeight:300}}>{amountStatus}</Typography>
        <Typography variant='body1' sx={{fontSize:{xs:'0.8rem',lg:'1rem'},color:"#91C90E",fontWeight:300}}>{daysStatus}</Typography>
        
        <Typography variant="body1" sx={{ color: colors[0], fontWeight: '200' }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularGraph;
