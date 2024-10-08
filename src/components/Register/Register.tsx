import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  CircularProgress,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState, ChangeEvent } from "react";
import { logo } from "../../constants/icons";
import axios,{AxiosError} from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("First Name:", formData.firstName);
    console.log("Last Name:", formData.lastName);
    console.log("Phone Number:", formData.phoneNumber);
    console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.password);

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/dashboard");
      console.log("User registered successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error(
          "Error registering user:",
          axiosError.response ? axiosError.response.data : axiosError.message
        );
    } else {
      console.error("Unexpected error:", error);
    }}finally {
      setFormData({
        firstName:'',
        lastName:"",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
    }
    setLoading(false);
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#000052" }}>
      <Grid item component={Box} display="flex" flexDirection="column">
        <Box
          sx={{
            mx: 4,
            marginLeft: { lg: 30, sm: 10 },
            marginRight: { lg: 30, sm: 10 },
            paddingRight: { lg: 30, sm: 10 },
            paddingLeft: { lg: 30, sm: 10 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="" width={180} height={150} />
          </Box>

          <Box my={2}>
            <Typography
              variant="body1"
              style={{ color: "#FFFFFF", fontWeight: 100 }}
              fontSize={22}
            >
              USER REGISTER
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={2}>
              <InputLabel sx={{ color: "#ffffff", fontWeight: 100 }}>
                Full Name
              </InputLabel>
              <TextField
                sx={{
                  borderBottom: "1px solid white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 0.5, // Ensure the opacity is set to 1 for visibility
                  },
                }}
                required
                type="password"
                variant="standard"
                size="small"
                fullWidth
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {/* 
              <InputLabel sx={{ color: '#ffffff', fontWeight: 100 }}>Last Name</InputLabel>
              <InputBase
                sx={{ borderBottom: '1px solid white', color: 'white' }}
                required
                type='text'
                variant="standard"
                size='small'
                fullWidth
                placeholder='Enter your last name'
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              /> */}

              <InputLabel sx={{ color: "#ffffff", fontWeight: 100 }}>
                Address
              </InputLabel>
              <TextField
                sx={{
                  borderBottom: "1px solid white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 0.5, // Ensure the opacity is set to 1 for visibility
                  },
                }}
                required
                type="password"
                variant="standard"
                size="small"
                fullWidth
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />

              <InputLabel sx={{ color: "#ffffff", fontWeight: 100 }}>
                Password
              </InputLabel>
              <TextField
                sx={{
                  borderBottom: "1px solid white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 0.5, // Ensure the opacity is set to 1 for visibility
                  },
                }}
                required
                type="password"
                variant="standard"
                size="small"
                fullWidth
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />

              <InputLabel sx={{ color: "#ffffff", fontWeight: 100 }}>
                Confirm Password
              </InputLabel>
              <TextField
                sx={{
                  borderBottom: "1px solid white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 0.5, // Ensure the opacity is set to 1 for visibility
                  },
                }}
                required
                type="password"
                variant="standard"
                size="small"
                fullWidth
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#ffffff",
                  fontSize: 15,
                  border: "1px solid #ffffff",
                  background: "transparent",
                  "&:hover": { backgroundColor: "#FFFFFF", color: "#000000" },
                }}
              >
                {loading && (
                  <CircularProgress
                    size={20}
                    sx={{ position: "relative", right: 20 }}
                  />
                )}
                CREATE ACCOUNT
              </Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Register;
