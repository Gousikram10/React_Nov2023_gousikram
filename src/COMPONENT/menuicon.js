import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button'; // Import Button component
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundImage:'url(https://tse1.mm.bing.net/th/id/OIP.UPG6p-Jujbo-601263b5wgHaEK?w=236&h=132&c=7&o=5&dpr=1.3&pid=1.7)',backgroundSize:'cover',height:'100px',paddingTop:'12px'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // edge="start"
            size='large'
            sx={{ mr: 3, ...(open && { display: 'none' }), color:"black"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 ,textAlign:'center',fontFamily:'PT sans',color:'black',fontWeight:'1000'}}>
           SUPERMARKET MANAGEMENT
          </Typography>
          {/* Sign In and Register buttons */}
          <Link to='/about'>
          <Button style={{paddingRight:"20px",color:'black'}}>
            <h3>ABOUT US </h3>
            </Button>
          </Link>
          <Link to='/lo'>
          <Button style={{paddingRight:"20px",color:'black'}}>
            <h3>LOGIN </h3>
            </Button>
          </Link>
          <Link to='/re'>
          <Button style={{color:'black'}}><h3>  REGISTER</h3></Button>
          </Link>
          <Link to="/item">
          <IconButton aria-label="cart" >
      <StyledBadge badgeContent={0} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
                <Link to='/ad' style={{textDecoration:'none',color:'black'}}>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <ManageAccountsIcon />
                </ListItemIcon>
           <ListItemText primary={"Admin"}/>
              </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/account' style={{textDecoration:'none',color:'black'}}>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <AccountBoxIcon />
                </ListItemIcon>
           <ListItemText primary={"Account details"}/>
              </ListItemButton>
          </ListItem>
           </Link>
          <Link to='/lo' style={{textDecoration:'none',color:'black'}}>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
           <ListItemText primary={"Log out"}/>
              </ListItemButton>
          </ListItem>
           </Link>
          <a href="https://mail.google.com/mail/u/0/?login#inbox" style={{textDecoration:'none',color:'black'}}>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
           <ListItemText primary={"Mail"}/>
              </ListItemButton>
          </ListItem>
           </a>
          {/* {['Adimin', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem> */}
          {/* ))} */}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
