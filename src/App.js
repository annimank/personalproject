import React from 'react';
import handleSubmit from './handles/handlesubmit';
import { CssBaseline, ThemeProvider, createTheme, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Fishes from './components/Fishes';
import Equipment from './components/Equipment';
import Map from './components/Map';

const theme = createTheme({
  palette: {
    primary: { main: '#00A8E8', contrastText: '#FF6F00' },
    secondary: { main: '#39FF14', contrastText: '#FF6F00' },
    text: { primary: '#333333', secondary: '#CCCCCC' },
    background: { default: '#FFFFFF' }
  },
})

/*const fish = [
  {
    id: 1,
    species: 'Perch',
    pic: 'fish.png',
    desc: 'lorem ipsum',
  },
  {
    id: 2,
    species: 'Pike',
    pic: 'fish.png',
    desc: 'lorem ipsum',
  },
  {
    id: 3,
    species: 'Ruffe',
    pic: 'fish.png',
    desc: 'lorem ipsum',
  },
  {
    id: 4,
    species: 'Pike-perch',
    pic: 'fish.png',
    desc: 'lorem ipsum',
  },
  {
    id: 5,
    species: 'Bream',
    pic: 'fish.png',
    desc: 'lorem ipsum',
  },
]*/


function App() {

  /*const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }*/

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Topbar />} >
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='Fishes' element={<Fishes />} />
            <Route path='Equipment' element={<Equipment />} />
            <Route path='Map' element={<Map />} />
            <Route path='*' element={<Typography sx={{ margin: 3 }}>Page not found</Typography>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

/* 
<ThemeProvider theme={theme1}>
    <CssBaseline/>
    <div className="App">
      <Topbar data={fish} />
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
    </ThemeProvider>
    
    */