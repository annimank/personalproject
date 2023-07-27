import React, { useState } from 'react';
import { Box, Tabs, Tab, AppBar, Toolbar } from '@mui/material';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import SetMealRoundedIcon from '@mui/icons-material/SetMealRounded';
import PhishingRoundedIcon from '@mui/icons-material/PhishingRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Topbar() {

    const [value, setValue] = useState(0);

    const handleChange = (event, val) => {
        setValue(val);
    }

    return (
        <Box>
            <AppBar position='static' elevation={0} sx={{ backgroundColor: 'rgba(33, 150, 243, 0.0)' }}>
                <Toolbar>
                    <Tabs value={value} TabIndicatorProps={{ style: { display: 'none' } }} onChange={handleChange} variant='fullWidth'
                        sx={{ flexGrow: 1, textAlign: 'center', }} textColor='textSecondary'>
                        <Tab label='Home' icon={<CabinRoundedIcon />} component={Link} to='Home' />
                        <Tab label='Fishes' icon={<SetMealRoundedIcon />} component={Link} to='Fishes' />
                        <Tab label='Equipment' icon={<PhishingRoundedIcon />} component={Link} to='Equipment' />
                        <Tab label='Locations' icon={<MapRoundedIcon />} component={Link} to='Map' />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </Box>
    )
}

export default Topbar;
