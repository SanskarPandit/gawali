import { useState,useEffect } from "react";
import "./Dashboard.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Typography,
  ListItemIcon,
  Grid,
  Box,
  Card,
  Button,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RefreshIcon from "@mui/icons-material/Refresh";
import menuItem from "../../utils/data";
import { useNavigate } from "react-router-dom";
import BillingCard from "../BillingCard/BillingCard";
import Reminder from "../Reminder/Reminder";
import { buffalo, logo } from "../../constants/icons";
import { useAxios } from "../../context/AxiosContext";
// import UserContext from "../../context/UserContext";
import { usePersonalDetails } from '../../context/PersonalDetailsContext';
import { useProductsAndPlans } from "../../context/ProductsAndPlansContext";
import { usePlan } from "../../context/PlansContext";
import { useBills } from "../../context/BillsAuthContext";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [closeReminder, setCloseReminder] = useState(true);
  const currentMonthYear = 'July 2024';
  const previousMonthYear = 'June 2024';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();
  const axios =useAxios();
  const {personalDetails} =usePersonalDetails();
  const { setPersonalDetails } = usePersonalDetails();
  const {setPlan} = usePlan();
  const {setProductsAndPlans} = useProductsAndPlans();
  const {setBills} = useBills()
  const handleClose = () => {
    setCloseReminder(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  // const {setUser} = useContext(UserContext)
  const fetchData = async () => {
    try {
      const response = await axios.get("/getMetaData/66a6480f9f2b1a00444f8e15");
      console.log(response.data);

      setPersonalDetails(response.data.personalDetails);
      setProductsAndPlans(response.data.productsAndPlans);
      setPlan(response.data.plan);
      setBills(response.data.bills);
      // setUser({dashboardDetails});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
  
   return()=> {fetchData();}
  }, []);
  
  const drawer = (
    <Box
      component="div"
      role="presentation"
      onClick={!isLargeScreen ? toggleDrawer : undefined}
      onKeyDown={!isLargeScreen ? (event) => { if (event.key === 'Enter') toggleDrawer(); } : undefined}
      className="drawer"
    >
      <List sx={{ overflowY: "hidden" }}>
        {menuItem.map(({ title, icon, descp, routes }) => (
          <ListItem
            button
            key={title}
            sx={{ borderBottom: "1px solid #A2E3F8", height: 65 }}
            onClick={() => {
              if (typeof routes === 'string') {
                navigate(routes);
              } else {
                console.error('Invalid route type');
              }
            }}
          >
            <ListItemIcon>
              <img src={icon} alt={title} style={{ width: 40, height: 40 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  color="textSecondary"
                  style={{ color: "#0A0A0A", fontSize: 16 }}
                >
                  {title}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ fontSize: "0.8rem", color: "#ACA9A9" }}
                >
                  {descp}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#0019A5",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {isLargeScreen ? (
            <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ width: 60, height: 60 }} />
            </Box>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <Typography
                variant="body1"
                component="div"
                className="menuIcon"
                sx={{ fontSize: 16, fontWeight: 100 }}
              >
                <MenuIcon sx={{ fontSize: "20px" }} />
                MENU
              </Typography>
            </IconButton>
          )}
          <Typography
            variant="body1"
            noWrap
            sx={{ flexGrow: 1, fontSize: "25px", fontWeight: 100, display: "flex", justifyContent: 'center', alignItems: 'center' }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <RefreshIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isLargeScreen || drawerOpen}
        onClose={!isLargeScreen ? toggleDrawer : undefined}
        variant={isLargeScreen ? "permanent" : "temporary"}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ p: 2, height: '100vh' }}>
        <Toolbar />
        <Typography
          variant="h2"
          sx={{
            color: "#000055",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.6rem",
          }}
        >
          Welcome, {personalDetails.name}
        </Typography>

        <Grid container justifyContent="center" mt={3}>
          {closeReminder && (
            <Grid item xs={12} sm={8} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Reminder
                title="Payment Overdue Reminder"
                description="Your last month's bill ₹2,160 is pending. Please pay it soon for uninterrupted milk delivery."
                handleEvent={handleClose}
              />
            </Grid>
          )}

          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} sm={6} lg={6} sx={{ flexDirection: 'column' }}>
              <BillingCard
                title="Current Billed (Unbilled)"
                monthYear={currentMonthYear}
                quantityValue={60}
                amountValue={2160}
                daysValue={80}
                quantityColors={['#91C90E', '#41B7E9']}
                amountColors={['#91C90E', '#41B7E9']}
                daysColors={['#91C90E', '#41B7E9']}
                quantityStatus={"Not Delivered"}
                amountStatus={"Unbill Amount"}
                daysStatus={"Unbilled"}
                button={"Reschedule Next Delivery"}
              />

              <BillingCard
                title="Previous Month (Billed)"
                monthYear={previousMonthYear}
                quantityValue={35}
                amountValue={2160}
                daysValue={75}
                quantityColors={['#91C90E', '#E21C33']}
                amountColors={['#91C90E', '#E21C33']}
                daysColors={['#91C90E', '#E21C33']}
                quantityStatus={"Delivered"}
                amountStatus={"Bill Amount"}
                daysStatus={"Billed"}
                button={"Show Detailed Bills"}
              />
              <Card elevation={2} sx={{ margin: 'auto', mt: 3, pl: { lg: 4, md: 3, xs: 1 }, pr: { lg: 4, md: 5, xs: 0.5 }, mb: 3, mr: { lg: 3 }, ml: { lg: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontSize: { lg: '1.1rem', xs: '1rem' }, border: '1px solid #CDCDCD', p: 0.9, mb: 1, mt: 1 }}>Your Current Plan</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E0E0E0', mb: 1 }}>
                  <Box sx={{ mr: 2, p: 1 }}>
                    <Box component='img' src={buffalo} width={{ lg: '200', xs: "150" }} height={{ lg: '200', xs: "150" }} alt="buffalo image" />
                  </Box>
                  <Box sx={{ flex: 1, pl: { lg: 5, md: 5 }, pr: { lg: 5, md: 5 } }}>
                    <Typography variant="h6" sx={{ fontSize: { xs: '1rem', lg: '1.3rem' } }}>Buffalo Milk</Typography>
                    <Typography variant="body2" sx={{ color: '#686868' }}>1.5 Liters / Day</Typography>
                    <Typography variant="subtitle1">₹ 50/ Liter</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: { lg: 2, md: 2, xs: '8px' }, pr: { lg: 2, md: 2 }, mb: 6, mr: { xs: 1 } }}>
                    <Box sx={{ mt: 3, border: '2px solid #E0E0E0', backgroundColor: "#15AD00", color: '#FFFFFF', borderRadius: 1, fontSize: { lg: '0.8rem', xs: "0.7rem" }, p: { lg: '4px', md: '4px', xs: '2px' } }}>
                      Current Plan
                    </Box>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Monthly</Typography>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>₹ 2,700</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button variant="contained" sx={{ backgroundColor: "#E21C33", "&:hover": { backgroundColor: "#E21C33" }, mb: 1 }} disableElevation onClick={() => { navigate('/my-plans') }}>
                    <Typography variant="h6" sx={{ fontSize: '0.8rem' }}>Change Plan</Typography>
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
