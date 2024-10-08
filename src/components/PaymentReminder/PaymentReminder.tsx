import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { green, blue, red } from '@mui/material/colors';

interface CircleDataProps {
  title: string;
  value: string;
  unit: string;
  color: string;
}

interface PaymentReminderData {
  quantity: { value: number; unit: string };
  amount: { value: number; unit: string };
  days: { value: number; unit: string };
  extra?: { value: number; unit: string };
}

interface PaymentReminderProps {
  title: string;
  data: PaymentReminderData;
  date: string;
}

const CircleData = ({ title, value, unit, color }: CircleDataProps) => {
  return (
    <Paper variant="outlined" style={{ borderRadius: '50%', textAlign: 'center', padding: 20, borderColor: color }}>
      <Typography variant="h6" style={{ color }}>{title}</Typography>
      <Typography variant="h4" style={{ color }}>{value}</Typography>
      <Typography variant="subtitle1" style={{ color }}>{unit}</Typography>
    </Paper>
  );
};

const PaymentReminder = ({ title, date, data }: PaymentReminderProps) => {
  return (
    <Box my={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6" style={{ color: blue[500] }}>{date}</Typography>
      </Box>
      <Divider />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <CircleData title="Quantity" value={`${data.quantity.value}`} unit={data.quantity.unit} color={green[500]} />
        </Grid>
        <Grid item>
          <CircleData title="Amount" value={`₹ ${data.amount.value}`} unit={data.amount.unit} color={blue[500]} />
        </Grid>
        <Grid item>
          <CircleData title="Days" value={`${data.days.value}`} unit={data.days.unit} color={blue[500]} />
        </Grid>
        {data.extra && (
          <Grid item>
            <CircleData title="Amount Saved" value={`₹ ${data.extra.value}`} unit={data.extra.unit} color={red[500]} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default PaymentReminder;
