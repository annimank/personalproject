/*
import React from 'react';
import { Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';

function Fishes(props) {

    return (
        <Box>
            {
                props.fish.map(data=> {
                    return (
                        <Card key={ data.id } sx={{ maxWidth: 300 }}>
                            <CardHeader title={data.species}/>
                            <CardMedia component='img' height='200'
                            image={data.pic}
                            alt={data.desc} />
                            <CardContent>
                                <Typography> { data.desc } </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>More</Button>
                            </CardActions>
                        </Card>
                    ) //return
                }) //map
            }
        </Box>
    ) //return
} //function

export default Fishes;
*/
/*
import React from 'react';
import { Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';

function Fishes() {

  return (
    <Box>
      {props.fish.map((data) => {
        return (
          <Card key={data.id} sx={{ maxWidth: 300 }}>
            <CardHeader title={data.species} />
            <CardMedia component='img' height='200' image={data.pic} alt={data.desc} />
            <CardContent>
              <Typography>{data.desc}</Typography>
            </CardContent>
            <CardActions>
              <Button>More</Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}

export default Fishes;

*/
import React, { useState, useEffect } from 'react';
import { Grid, Dialog, DialogContent, DialogContentText, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { getFish, deleteFish } from './fish.js';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Fishes() {

  const [fish, setFish] = useState([]);
  const [viesti, setViesti] = useState('');
  const [open, setOpen] = useState(false);

  const getAllFish = async () => {
    try {
      const response = await getFish();
      setFish(response);
      setViesti('');
    } catch (error) {
      setFish([]);
      setViesti('No data found');
    }
  }

  useEffect(() => {
    getAllFish();
  }, [])

  const handleClose = () => {
    setOpen(false);
  }

  const poista = async (id) => {
    try {
      await deleteFish(id);
      setViesti('Fish deleted');
    } catch (error) {
      setViesti('Fish not deleted');
    }
    setOpen(true);
  }

  // delete dialog
  let dialog =
    <Dialog onClick={handleClose} open={open}>
      <DialogContent>
        <DialogContentText color='secondary'>{viesti}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogContentText>
      </DialogContent>
    </Dialog>

  if (viesti === 'Fish deleted') {
    return (
      <div>
        {dialog}
        {<Fishes />}
      </div>
    )
  }
  else if (viesti.length > 0) {
    return (<Typography>{viesti}</Typography>);
  }

  return (
    <div>
      {dialog}

      <Grid container spacing={10}>
        <Grid xs={12}>
          <Typography paddingTop={15} fontSize={30} align="center" color="text.secondary">
            Fish I've caught
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5} padding={5}>
        <Grid container item xs={12} spacing={5}>
          {fish.map((fish) => {
            return (
              <Grid item key={fish.id} xs={3}>
                <Card
                  key={fish.id}
                  sx={{
                    padding: "10px",
                    maxWidth: 250,
                    maxHeight: 400,
                    minHeight: 400,
                    borderRadius: "0px",
                    backgroundColor: "#EFEFEF",
                    position: "relative"
                  }}
                >
                  <CardContent>
                    <Grid container style={{ height: '100px' }}>
                      <Typography variant="h5" component="h2">
                        {fish.species}
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Typography variant="body2" component="p">
                        <Typography fontSize={15} color="textPrimary">
                          Author:{" "}
                        </Typography>
                        <Typography fontSize={15} color="textSecondary">
                          {fish.desc}
                        </Typography>
                        <br />
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <IconButton color='secondary' onClick={() => poista(fish.id)}><DeleteOutlineOutlinedIcon /></IconButton>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

    </div>
  )
  return (<Typography>No books</Typography>);
}



export default Fishes;
