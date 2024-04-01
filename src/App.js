import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Carlist from './components/Carlist';


function App() {

  return (

    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">CarList</Typography>
        </Toolbar>
      </AppBar>
      <Carlist/>
    </div>
    
  );
}
export default App;