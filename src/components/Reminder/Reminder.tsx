
import {
  Button,
  IconButton,
  Typography,
  CardContent,
  Card,
  CardActions,
  CardHeader,
} from "@mui/material";
import { rupees } from "../../constants/icons";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

interface ReminderProps {
  title: string;
  description: string;
  handleEvent?: () => void;
}
const Reminder = ({title,description,handleEvent=()=>{}}:ReminderProps) => {
const navigate = useNavigate()
    return (
    <>
          <Card sx={{border:'2px solid red',width:'87%',}} >
          <CardHeader
        avatar={
          <IconButton >
            <img src={rupees} alt="" height={40} />
          </IconButton>
        }
        action={
          <IconButton sx={{ padding: 0 }} onClick={handleEvent} >
           <CloseIcon sx={{marginTop:1 ,color:'#0073A8',fontSize: '25px'}} />
          </IconButton>
        }
        title={
          <Typography variant="h5"  sx={{color:'#000066',fontSize:{lg:'1.2rem',xs:'1rem'},}}>
           {title}
          </Typography>
        }
      />
            <CardContent sx={{padding:'0'}}>
              <Typography sx={{ mb: 1,color:"#000066",fontSize:'14px', marginLeft:11,}} >
                {description}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginLeft:9}}>
              <Button size="small" sx={{color:'#0073A8',fontSize:'15px'}} onClick={()=>navigate('/payment')}>Pay now</Button>
            </CardActions>
          </Card>
    </>
  )
}

export default Reminder