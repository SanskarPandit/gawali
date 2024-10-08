import React, { useState } from "react";
import { Box, Typography, Stack, Button, InputBase, CircularProgress, Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../../index.css";
import { logo } from '../../constants/icons';
const VerifyOtp: React.FC = () => { 
  const [otpInput, setOtpInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = parseInt(location.state?.phoneNumber);
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const otp = e.target.value;
    setOtpInput(otp);
    setIsOtpValid(otp.length === 6 && /^[0-9]+$/.test(otp)); // Assuming OTP is 6 digits
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isOtpValid) {
      setError("Please enter a valid OTP");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("https://milk-backend-v1.onrender.com/verify", {  otp: otpInput,phoneNumber });
      console.log(response) 
      if (response.data.status === 200) {
        sessionStorage.setItem('token',response.data.token)
        console.log('jwt token',response.data.token)
        navigate("/dashboard");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("Invalid OTP. Please try again.");
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
                VERIFY OTP
              </Typography>
              <Typography style={{ color: "#CCC7C7", marginTop: 3 }} variant="body2" fontSize={13}>
                Enter the OTP sent to your phone number
              </Typography>
            </Box>
            <Box sx={{ mt: 2, ml: { lg: 4, sm: 2 } }}>
              <Stack direction={"column"} spacing={2} my={2}>
                <form onSubmit={handleSubmit}>
                  <InputBase
                    style={{ borderBottom: "1px solid white", color: "white" }}
                    required
                    value={otpInput}
                    type="number"
                    size="small"
                    fullWidth
                    onChange={handleOtpChange}
                    placeholder="Enter OTP"
                    sx={{ width: { lg: "400px" } }}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 ,width:{lg:"80%"}, "&:hover":{backgroundColor:"#FFFFFF",color:"#000000"}}}
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#000000",
                      fontSize: 15,
                    }}
                    disabled={!isOtpValid || loading}>
                    {loading && (
                      <CircularProgress size={20} sx={{ position: "relative", right: 20 }} />
                    )}
                    Verify OTP
                  </Button>
                </form>
                {error && <Typography color="error">{error}</Typography>}
                <Typography
                  variant="h6"
                  fontSize={11}
                  style={{
                    color: "#CCC7C7",
                  }}>
                  By clicking, I accept the Terms & Conditions & Privacy Policy
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
export default VerifyOtp;
