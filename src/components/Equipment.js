import React, { useState, useEffect } from 'react';
import { Grid, Dialog, DialogContent, DialogContentText, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { getEquipment, deleteEquipment } from './equipment2.js';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Equipment() {

  const [equipment, setEquipment] = useState([]);
  const [viesti, setViesti] = useState('');
  const [open, setOpen] = useState(false);

  const getAllEquipment = async () => {
    try {
      const response = await getEquipment();
      setEquipment(response);
      setViesti('');
    } catch (error) {
      setEquipment([]);
      setViesti('No data found');
    }
  }

  useEffect(() => {
    getAllEquipment();
  }, [])

  const handleClose = () => {
    setOpen(false);
  }

  const poista = async (id) => {
    try {
      await deleteEquipment(id);
      setViesti('Equipment deleted');
    } catch (error) {
      setViesti('Equipment not deleted');
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

  if (viesti === 'Equipment deleted') {
    return (
      <div>
        {dialog}
        {<Equipment />}
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
        <Grid xs={9}>
          <Typography paddingTop={15} fontSize={30} align="center" color="text.secondary">
            List of books I have read
          </Typography>
        </Grid>
        <Grid xs={3}>
          <Typography paddingTop={15} fontSize={30} align="center" color="text.secondary">
            Add a book
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5} padding={5}>
        <Grid container item xs={9} spacing={5}>
          {equipment.map((equipment) => {
            return (
              <Grid item key={equipment.id} xs={4}>
                <Card
                  key={equipment.id}
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
                        {equipment.name}
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Typography variant="body2" component="p">
                        <Typography fontSize={15} color="textPrimary">
                          Author:{" "}
                        </Typography>
                        <Typography fontSize={15} color="textSecondary">
                          {equipment.desc}
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
                      <IconButton color='secondary' onClick={() => poista(equipment.id)}><DeleteOutlineOutlinedIcon /></IconButton>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container item xs={12} sm={6} md={3}>
          <Typography fontSize={20}>
            “The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”<br />Dr. Seuss
          </Typography>
          <br />
          <Typography fontSize={20}>
            “Books are a uniquely portable magic.”<br />Stephen King
          </Typography>
          <br />
          <Typography fontSize={20}>
            “There is more treasure in books than in all the pirate’s loot on Treasure Island.”<br />Walt Disney
          </Typography>
          <br />
          <Typography fontSize={20}>
            “I guess there are never enough books.”<br />John Steinbeck
          </Typography>
          <br /><br /><br />
        </Grid>
      </Grid>

    </div>
  )

  return (<Typography>No books</Typography>);
}



export default Equipment;
