import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  InputBase,
  CircularProgress,
} from "@mui/material";
import { logo } from "../../constants/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';

const PhoneLogin: React.FC = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhoneInput(phone);
    setIsPhoneValid(phone.length === 10 && /^[0-9]+$/.test(phone));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPhoneValid) {
      setError("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    setError(""); // Reset error state

    try {
      const response = await axios.post("https://milk-backend-v1.onrender.com/login", { phoneNumber: parseInt(phoneInput) });
      
      if (response.data.status === 302) {
        setError("Please Register Yourself first");
      } else {
        navigate("/otp-verification", { state: { phoneNumber: phoneInput } });
      }
    } catch (err) {
      setError("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#000052" }}>
      <Grid item component={Box} display="flex" flexDirection="column">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            marginLeft: { lg: 40 },
            marginRight: { lg: 20 },
            paddingRight: { lg: 20 },
            paddingLeft: { lg: 20 },
            marginTop: { lg: 25 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box component="img" src={logo} alt="Logo" sx={{ width: { lg: 210, md: 200, xs: 200 }, height: { lg: 210, md: 200, xs: 200 } }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mt: 5, ml: { lg: 4, sm: 2 } }}>
              <Typography variant="h6" style={{ color: "#FFFFFF", fontWeight: "100" }}>
                LOGIN
              </Typography>
              <Typography style={{ color: "#CCC7C7", marginTop: 3 }} variant="body2" fontSize={13}>
                Enter your phone number to proceed
              </Typography>
            </Box>
            <Box sx={{ mt: 2, ml: { lg: 4, sm: 2 }, width: { lg: "400px" } }}>
              <Stack direction={"column"} spacing={2} my={2}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <InputBase
                      style={{ borderBottom: "1px solid white", color: "white" }}
                      required
                      value={phoneInput}
                      type="number"
                      size="small"
                      fullWidth
                      onChange={handlePhoneChange}
                      placeholder="Enter your 10 digit mobile number"
                      sx={{ width: '100%' }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      sx={{
                        mt: 3, mb: 2, backgroundColor: "#FFFFFF", color: "#000000", fontSize: 12,
                        "&:disabled": { backgroundColor: '#868686' },
                        "&:hover": { backgroundColor: "#FFFFFF", color: "#000000" },
                        width: '100%'
                      }}
                      disabled={!isPhoneValid || loading}
                    >
                      {loading && (
                        <CircularProgress size={20} sx={{ position: "relative", right: 20 }} />
                      )}
                      <Box component='span' sx={{ fontSize: { lg: '1rem' } }}> Login</Box>
                    </Button>
                  </Box>

                  {error && <Alert severity="error">{error}</Alert>}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#CCC7C7",
                      fontSize: { lg: '0.8rem', xs: '0.7rem' },
                    }}
                  >
                    By clicking, I accept the Terms & Conditions & Privacy Policy
                  </Typography>
                </form>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default PhoneLogin;
