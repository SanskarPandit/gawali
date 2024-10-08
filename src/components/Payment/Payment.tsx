import { useState,ChangeEvent } from "react";
import menuItem from "../../utils/data";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
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
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
const Payment = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [closeReminder, setCloseReminder] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [expandedOption, setExpandedOption] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    setExpandedOption(value === expandedOption ? "" : value);
    setDisabled(false);
  };

  const descriptions = {
    upiOption:
      `Pay using any UPI supported apps- Google Pay(Tez),Phone Pe,Paytm UPI, etc.
      Your wallet balance will updated within 1 working day.`,
    bankOption:
      "Pay using IMPS/ NEFT / RTGS to below mentioned bank account details. Your wallet balance post receipts of payment",
  };

  const toggleDrawer = (_open:boolean) => () => {
    setDrawerOpen(!drawerOpen);
  };
  const navigate = useNavigate();
  const drawer = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="drawer"
    >
      <List sx={{ overflowY: "hidden" }}>
        {menuItem.map(({ title, icon, descp, routes }) => (
          <ListItem
            button
            key={title}
            sx={{ borderBottom: "1px solid #A2E3F8", height: 65 }}
            onClick={() =>{ if (typeof routes === 'string') {
              navigate(routes);
            } else {
              console.error('Invalid route type');
            }}}
          >
            <ListItemIcon>
              <img src={icon} alt={title} style={{ width: 40, height: 40 }} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1" color="textSecondary" style={{ color: "#0A0A0A", fontSize: 16 }}>{title}</Typography>}
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <Typography
              variant="body1"
              component="div"
              className="menuIcon"
              sx={{ fontPalette: "2px", fontSize: 15 }}
            >
              <MenuIcon sx={{ fontSize: "20px" }} />
              MENU
            </Typography>
          </IconButton>
          <Typography
            variant="body1"
            noWrap
            sx={{ flexGrow: 1, fontSize: "20px", marginLeft: "20px" }}
          >
            Payment
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

      <Box component="main" sx={{ pt: 3 }}>
        <Toolbar />
        <Box sx={{ borderBottom: "2px solid #BEB9B9" }}>
          <Typography variant="subtitle1" ml={2}>
            Choose your Payment Method
          </Typography>
        </Box>

        <FormControl
          component="fieldset"
          sx={{
            marginLeft: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadioGroup
            aria-label="options"
            name="options"
            value={selectedValue}
            onChange={handleChange}
            sx={{
              marginLeft: { lg: 30 },
              marginRight: { lg: 30 },
              my: 6,
              mx: 2,
            }}
          >
            <FormControlLabel
              value="upiOption"
              control={<Radio />}
              label={
                <Typography variant="subtitle2" sx={{ fontSize: "1.1rem" }}>
                  UPI (GPay, Phone Pe, BHIM, PayTm)
                </Typography>
              }
              sx={{ borderBottom: "1px solid #BEB9B9", marginBottom: 1 }}
            />
            <Collapse in={expandedOption === "upiOption"}>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: "17px",fontSize:'17px',marginBottom:6, }}
              >
                {descriptions["upiOption"]}
              </Typography>
            </Collapse>


            <FormControlLabel
              value="bankOption"
              control={<Radio />}
              label={
                <Typography variant="subtitle2" sx={{ fontSize: "1.1rem" }}>
                  Bank Transfer
                </Typography>
              }
              sx={{ borderBottom:"1px solid #BEB9B9", marginBottom: 1 }}
            />
            <Collapse
              in={expandedOption === "bankOption"}>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: "16px" ,fontSize:'17px',marginBottom:6, borderBottom: "1px solid #BEB9B9" }}
              >
              {descriptions["bankOption"]}
              </Typography>
            </Collapse>


            <FormControlLabel
              value="option3"
              control={<Radio />}
              label={
                <Typography variant="subtitle2" sx={{ fontSize: "1.1rem" }}>
                  Cash on Delivery
                </Typography>
              }
              sx={{ borderBottom: "1px solid #BEB9B9", marginBottom: 1 }}
            />
           
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            marginLeft: { lg: 30, sm: 9 },
            marginRight: { lg: 30, sm: 9 },
            paddingRight: { lg: 30, sm: 9 },
            paddingLeft: { lg: 30, sm: 9 },
            marginTop: { lg: 10, sm: 20 },
          }}
        >
          <Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: disabled ? "grey" : "#0081CD",
                color: "#FFFFFF",
              }}
              disabled={disabled}
            >
              Proceed
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
