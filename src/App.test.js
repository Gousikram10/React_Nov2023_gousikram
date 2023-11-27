import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<Box sx={{ flexGrow: 1 }}>
<AppBar position="static" style={{backgroundColor:'green'}}>
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 3}}
      >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
      <h3>SUPERMARKET MANAGEMENT</h3>
    </Typography>
    <Button color="inherit" style={{paddingRight:"20px"}}><h3>LOGIN </h3></Button>
    <Button color="inherit"><h3>  REGISTER</h3></Button>
  </Toolbar>
</AppBar>
</Box>https://www.haygarth.co.uk/getmedia/5b3e1182-a201-487a-9cc7-f8b9eefafb15/commerce.png?width=1200



<Link to='/lo'>
          <button style={{paddingRight:"200px",color:'white'}}>
            <h3>LOGIN </h3>
            </button>
          </Link>
          <Link to='/re'>
          <button style={{color:'white'}}><h3>  REGISTER</h3></button>
          </Link>