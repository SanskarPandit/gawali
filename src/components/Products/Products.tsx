import  { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  Button,
  CssBaseline,
  Tabs, 
  Tab ,
  Grid, 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import tabs from "../../utils/tabs";
import { useProductsAndPlans } from "../../context/ProductsAndPlansContext";
const Products = () => {
 
  const navigate = useNavigate();  
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange =( newValue: number)=> {
    setSelectedTab(newValue);
  };

  const {productsAndPlans} = useProductsAndPlans()
  const renderMilkProducts = ()=>(
    <Box style={{ flexWrap: 'wrap', justifyContent: 'center' ,marginTop:20}}>
    {productsAndPlans.products.length===0?(
      <Typography sx={{color:'red'}}>No milk products available</Typography>
    )
    :(productsAndPlans.products.map((item,index ) => (
      <Card sx={{ alignItems: 'center', p: 2, m: 1,mt:2,border:'1px solid #E0E0E0'}} elevation={0} key={index}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Box
              component='img'
            src={item.img}
              alt="product image"
              sx={{ width: 120, height: 120,}}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flexDirection: 'column', justifyContent: 'center',ml:5}}>
              <Typography variant="body1" component="div" fontSize={'1.2rem'}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{color:"#686868"}}>
                {item.descp}
              </Typography>
              <Typography variant="body1" fontSize={'1.1rem'}>
               {item.quantity}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
            {item.isCurrentPlan ? (
              <>
                <Box
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', border: '2px solid #E0E0E0', borderRadius: 1,mb:1 }}
                >
                <Typography variant="body1" fontSize={'10px'}>Current Plan</Typography>
              </Box>
           
                <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF','&:hover': { backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF'},mb:5 }}
                startIcon={<RemoveIcon sx={{pl:'5px'}}/> }
              >
                <Typography variant="body1" sx={{ fontSize: '0.8rem',pr:'4px'}}>Remove</Typography>
              </Button>
              </>
            ) : (
              <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', ml: 4, borderColor: '#FFFFFF', '&:hover': { backgroundColor: "#15AD00", color: '#FFFFFF', borderColor: '#FFFFFF' } }}
                startIcon={<AddIcon />}
              >
                <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>Add</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Card>)
    ))}
  </Box>
  )

  const renderCurdProducts = ()=>(
    <Box style={{ flexWrap: 'wrap', justifyContent: 'center' ,marginTop:20}}>
    {productsAndPlans.products.length===0?(
      <Typography sx={{color:'red'}}>No curd products available</Typography>
    )
    :(productsAndPlans.products.map((item,index ) => (
      <Card sx={{ alignItems: 'center', p: 2, m: 1,mt:2,border:'1px solid #E0E0E0'}} elevation={0} key={index}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Box
              component='img'
            src={item.img}
              alt="product image"
              sx={{ width: 120, height: 120,}}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flexDirection: 'column', justifyContent: 'center',ml:5}}>
              <Typography variant="body1" component="div" fontSize={'1.2rem'}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{color:"#686868"}}>
                {item.descp}
              </Typography>
              <Typography variant="body1" fontSize={'1.1rem'}>
               {item.quantity}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
            {item.isCurrentPlan ? (
              <>
                <Box
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', border: '2px solid #E0E0E0', borderRadius: 1,mb:1 }}
                >
                <Typography variant="body1" fontSize={'10px'}>Current Plan</Typography>
              </Box>
           
                <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF','&:hover': { backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF'},mb:5 }}
                startIcon={<RemoveIcon sx={{pl:'5px'}}/> }
              >
                <Typography variant="body1" sx={{ fontSize: '0.8rem',pr:'4px'}}>Remove</Typography>
              </Button>
              </>
            ) : (
              <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', ml: 4, borderColor: '#FFFFFF', '&:hover': { backgroundColor: "#15AD00", color: '#FFFFFF', borderColor: '#FFFFFF' } }}
                startIcon={<AddIcon />}
              >
                <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>Add</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Card>)
    ))}
  </Box>
  )


  const renderPaneerProducts = ()=>(
    <Box style={{ flexWrap: 'wrap', justifyContent: 'center' ,marginTop:20}}>
    {productsAndPlans.products.length===0?(
      <Typography sx={{color:'red'}}>No paneer products available</Typography>
    )
    :(productsAndPlans.products.map((item,index ) => (
      <Card sx={{ alignItems: 'center', p: 2, m: 1,mt:2,border:'1px solid #E0E0E0'}} elevation={0} key={index}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Box
              component='img'
            src={item.img}
              alt="product image"
              sx={{ width: 120, height: 120,}}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flexDirection: 'column', justifyContent: 'center',ml:5}}>
              <Typography variant="body1" component="div" fontSize={'1.2rem'}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{color:"#686868"}}>
                {item.descp}
              </Typography>
              <Typography variant="body1" fontSize={'1.1rem'}>
               {item.quantity}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
            {item.isCurrentPlan ? (
              <>
                <Box
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', border: '2px solid #E0E0E0', borderRadius: 1,mb:1 }}
                >
                <Typography variant="body1" fontSize={'10px'}>Current Plan</Typography>
              </Box>
           
                <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF','&:hover': { backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF'},mb:5 }}
                startIcon={<RemoveIcon sx={{pl:'5px'}}/> }
              >
                <Typography variant="body1" sx={{ fontSize: '0.8rem',pr:'4px'}}>Remove</Typography>
              </Button>
              </>
            ) : (
              <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', ml: 4, borderColor: '#FFFFFF', '&:hover': { backgroundColor: "#15AD00", color: '#FFFFFF', borderColor: '#FFFFFF' } }}
                startIcon={<AddIcon />}
              >
                <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>Add</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Card>)
    ))}
  </Box>
  )

  const renderGheeProducts = ()=>(
    <Box style={{ flexWrap: 'wrap', justifyContent: 'center' ,marginTop:20}}>
    {productsAndPlans.products.length===0?(
      <Typography sx={{color:'red'}}>No ghee products available</Typography>
    )
    :(productsAndPlans.products.map((item,index ) => (
      <Card sx={{ alignItems: 'center', p: 2, m: 1,mt:2,border:'1px solid #E0E0E0'}} elevation={0} key={index}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Box
              component='img'
            src={item.img}
              alt="product image"
              sx={{ width: 120, height: 120,}}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flexDirection: 'column', justifyContent: 'center',ml:5}}>
              <Typography variant="body1" component="div" fontSize={'1.2rem'}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{color:"#686868"}}>
                {item.descp}
              </Typography>
              <Typography variant="body1" fontSize={'1.1rem'}>
               {item.quantity}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
            {item.isCurrentPlan ? (
              <>
                <Box
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', border: '2px solid #E0E0E0', borderRadius: 1,mb:1 }}
                >
                <Typography variant="body1" fontSize={'10px'}>Current Plan</Typography>
              </Box>
           
                <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF','&:hover': { backgroundColor: "#EE2727", color: '#FFFFFF', borderColor: '#FFFFFF'},mb:5 }}
                startIcon={<RemoveIcon sx={{pl:'5px'}}/> }
              >
                <Typography variant="body1" sx={{ fontSize: '0.8rem',pr:'4px'}}>Remove</Typography>
              </Button>
              </>
            ) : (
              <Button
                disableElevation
                variant="contained"
                sx={{ p: '4px', backgroundColor: "#15AD00", color: '#FFFFFF', ml: 4, borderColor: '#FFFFFF', '&:hover': { backgroundColor: "#15AD00", color: '#FFFFFF', borderColor: '#FFFFFF' } }}
                startIcon={<AddIcon />}
              >
                <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>Add</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Card>)
    ))}
  </Box>
  )
  const renderProducts = () => {
    switch (selectedTab) {
      case 0:
        return renderMilkProducts();
      case 1:
        return renderCurdProducts();
      case 2:
        return renderGheeProducts();
        case 3:
        return renderPaneerProducts();
      default:
        return null;
    }
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
          <Typography variant="body1" pl={3} sx={{ fontSize: "20px" }}>
            Products
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: { lg: 2, md: 2 } }}>
        <Tabs value={selectedTab}  sx={{ '.MuiTabs-indicator': { display: 'none' } }} onChange={(_event, newValue) => handleTabChange(newValue)}>
          {tabs.map((label, index) => (
            <Tab
              key={label}
              label={label}
              sx={{
                mt: 2,
                border: '1px solid #E0E0E0',
                '&.Mui-selected': {
                  backgroundColor: '#DFF2E6',
                  color: '#099941',
                },
                '&:hover': {
                  backgroundColor: selectedTab !== index ? '#DFF2E6' : '#DFF2E6',
                },
              }}
            />
          ))}
        </Tabs>
        {renderProducts()}
      </Box>
    </>
  );
};

export default Products;
