import{ useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Switch,
  } from "@mui/material";
import Popover from '@mui/material/Popover';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import { ArrowBackSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { user } from "../../constants/icons";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [openAddForm,setAddOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false); 
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const[addUser,setAddUser] = useState({
    _id:'',
    firstName:'',
    lastName:'',
    phoneNumber: '',
    altPhoneNumber: '',
    email: '',
    flatNo: '',
    colony: '',
    landmark: '',
    city: '',
    locality: '',
    profileImage: '',
    role: '',
    isActive:false
  })
  
  const handleAddUserChange = (e)=>{
    setAddUser({...addUser,[e.target.name]:e.target.value,})
  }
// Add Form Submit
  const handleUserFormSubmit =(e)=>{
    e.preventDefault();
    axios.post(`https://milk-backend-v1.onrender.com/addUser`,addUser).then((response)=>{
      console.log("User added successfully!",response.data);
    }).catch((error)=>{
      console.error(error)
    })
    setAddOpenForm(false);
  };

  const handleIsActiveChange = (event) => {
    setAddUser({ ...addUser, isActive: event.target.checked });
  };
  
  const handleAddFormOpen = () => {
    setAddOpenForm(true);
  };
  const handleAddFormClose = () => {
    setAddOpenForm(false);
  };

  const [editUser,setEditUser] = useState({...addUser});

  // Edit Form Submit
  const handleEditUserFormSubmit = (e) => {
    e.preventDefault();
    axios.patch(`https://milk-backend-v1.onrender.com/updateUser/${editUser._id}`,editUser).then((response)=>{
      console.log("User Edited successfully",response.data);
      setOpenEditForm(false);
        // Refresh users after update
        fetchUsers();
    }).catch((error)=>{console.error(error);
    })
  };

  const handleEditUserChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };
  const handleEditFormOpen = (user) => {
    setEditUser(user);
    setOpenEditForm(true)
    
  }
  const handleEditFormClose = () => {
    setOpenEditForm(false);
  };


  const handleDelete = (id) => {
    console.log("Delete user with id:", id);
    // Add logic to handle delete here
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };


// Fetching Users
  const fetchUsers = async()=>{
    const {data} = await axios.get("https://milk-backend-v1.onrender.com/getUsers");
    setUsers(data);
  }
  useEffect(() => {
  fetchUsers();
  }, []);
  
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
  <Toolbar sx={{ position: "relative" }}>
    <IconButton
      edge="start"
      color="inherit"
      onClick={() => navigate('/dashboard')}
    >
      <ArrowBackSharp />
    </IconButton>
    <Typography sx={{ fontSize: '18px', ml: 1, fontWeight: 100 }}>
      Go Back
    </Typography>

    <Typography
      variant="body1"
      noWrap
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        textAlign: "center",
        fontSize: "22px",
        fontWeight: 100,
      }}
    >
      Admin
    </Typography>
  </Toolbar>
</AppBar>
    <Box sx={{ position: "relative" ,p:6,mt:5}}>
      {/* Add Icon in the top-right corner */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2, // margin bottom to create space between the icon and the table
        }}
      >
        <IconButton color="success" onClick={handleAddFormOpen}>
          <AddIcon /><Typography sx={{fontSize:'18px',ml:1,fontWeight:100}}>Add User</Typography> 
        </IconButton>
      </Box>

    {/* Add User Dialog Box */}
    <BootstrapDialog
        onClose={handleAddFormClose}
        aria-labelledby="customized-dialog-title"
        open={openAddForm}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Add New User
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleAddFormClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleUserFormSubmit}>
        <DialogContent dividers>
        <TextField
          label="First Name"
          name="firstName"
          value={addUser.firstName}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />

        <TextField 
          label="Last Name"
          name="lastName"
          value={addUser.lastName}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={addUser.phoneNumber}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
          type="number"
         
        />
        <TextField
        type="number"
          label="Alt Phone Number"
          name="altPhoneNumber"
          value={addUser.altPhoneNumber}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={addUser.email}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
          type="email"
        />
        <TextField
          label="Flat No"
          name="flatNo"
          value={addUser.flatNo}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Colony"
          name="colony"
          value={addUser.colony}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Landmark"
          name="landmark"
          value={addUser.landmark}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="city"
          value={addUser.city}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Locality"
          name="locality"
          value={addUser.locality}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Profile Image"
          name="profileImage"
          value={addUser.profileImage}
          onChange={handleAddUserChange}
          fullWidth
          margin="normal"
        />
     <FormControl fullWidth>
      <InputLabel id='role-label'>Role</InputLabel>
      <Select
            labelId="role-label"
            name="role"
            value={addUser.role}
            onChange={handleAddUserChange}
            label="Role"
          
          >
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Delivery Guy">Delivery Guy</MenuItem>
          </Select>
     </FormControl>
     <FormControlLabel
        control={
          <Switch
            checked={addUser.isActive}
            onChange={handleIsActiveChange}
            name="isActive"
            color="primary"
          />
        }
        label={ addUser.isActive ? "Yes (Active)" : "No (Inactive)"}
      />
        </DialogContent>
        <DialogActions>
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
        </DialogActions>
        </form>
      </BootstrapDialog>
      {/* Edit Form */}
      <BootstrapDialog
        onClose={handleEditFormClose}
        aria-labelledby="customized-dialog-title"
        open={openEditForm}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Edit Existing User
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleEditFormClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleEditUserFormSubmit}>
            <DialogContent dividers>
              <TextField label="First Name" name="firstName" value={editUser.firstName} onChange={handleEditUserChange} fullWidth margin="normal" />
              <TextField label="Last Name" name="lastName" value={editUser.lastName} onChange={handleEditUserChange} fullWidth margin="normal" />
              <TextField label="Phone Number" name="phoneNumber" value={editUser.phoneNumber} onChange={handleEditUserChange} fullWidth margin="normal" type="number" />
              <TextField label="Alt Phone Number" name="altPhoneNumber" value={editUser.altPhoneNumber} onChange={handleEditUserChange} fullWidth margin="normal" type="number" />
              <TextField label="Email" name="email" value={editUser.email} onChange={handleEditUserChange} fullWidth margin="normal" type="email" />
              <TextField label="Flat No" name="flatNo" value={editUser.flatNo} onChange={handleEditUserChange} fullWidth margin="normal" />
              <TextField label="Colony" name="colony" value={editUser.colony} onChange={handleEditUserChange} fullWidth margin="normal" />
              <TextField label="Landmark" name="landmark" value={editUser.landmark} onChange={handleEditUserChange  } fullWidth margin="normal" />
              <TextField label="City" name="city" value={editUser.city} onChange={handleEditUserChange} fullWidth margin="normal" />
              <TextField label="Locality" name="locality" value={editUser.locality} onChange={handleEditUserChange} fullWidth margin="normal" />  
              <TextField label="Profile Image" name="profileImage" value={editUser.profileImage} onChange={handleEditUserChange} fullWidth margin="normal" />
              <FormControlLabel control={<Switch checked={editUser.isActive} onChange={(e) => setEditUser({ ...editUser, isActive: e.target.checked })} />} label="Is Active" />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleEditFormClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Update User
              </Button>
            </DialogActions>
          </form>
          </BootstrapDialog>

      {/* Table Component */}
      <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              {!isMobile && <TableCell>Phone Number</TableCell>}
              {!isMobile && <TableCell>Email</TableCell>}
              <TableCell>Role</TableCell>
              {!isMobile && <TableCell>Colony</TableCell>}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                {!isMobile && <TableCell>{user.phoneNumber}</TableCell>}
                {!isMobile && <TableCell>{user.email}</TableCell>}
                <TableCell>{user.role}</TableCell>
                {!isMobile && 
                <TableCell 
                 aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}>
                  {user.colony}
                </TableCell>}
                 
         <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none',cursor:'pointer' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{`${user.flatNo} ${user.landmark} ${user.locality} ${user.city}`}</Typography>
        </Popover>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditFormOpen(user)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(user)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isMobile && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Swipe to see more data on larger screens
            </Typography>
          </Box>
        )}
      </TableContainer>
    </Box>
    </>
  );
};

export default Admin;
