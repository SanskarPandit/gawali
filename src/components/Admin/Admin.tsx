
import { AppBar, Toolbar, IconButton, CssBaseline, Typography,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RefreshIcon from '@mui/icons-material/Refresh';
const Admin = () => {
  return (
    <>
    <CssBaseline />
    <AppBar position="fixed" sx={{ backgroundColor: "#0019A5", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                
                sx={{ display: 'flex', alignItems: 'center', mr: 2 }}
            >
                <Typography variant="body1" component="div" className='menuIcon' sx={{ fontPalette: '2px' }}>
                    <MenuIcon sx={{ fontSize: '20px' }} />
                    MENU
                </Typography>
            </IconButton>
            <Typography variant="body1" noWrap sx={{ flexGrow: 1, fontSize: '20px', marginLeft: '20px' }}>
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
    </>
  )
}

export default Admin