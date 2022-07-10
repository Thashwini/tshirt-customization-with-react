import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import useStyles from './CustomizeStyle';
import { CirclePicker } from 'react-color';
import Tshirt from './Components/Tshirt';
import DesignNav from './Components/DesignNav';

const Customize = () => {
  const classes = useStyles();
  const [textLayerColors, setTextLayerColors] = useState([
    '#ffffff',
    '#000000',
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
    '#C0C0C0',
    '#C9AE5D',
  ]);
  const [color, setColor] = useState(['#ffffff']);

  return (
    <Grid container>
      <Grid item xs={4}>
        <Grid item xs={3} className={classes.barContainer}>
          <DesignNav />
          <Box className={classes.barBox}>
            <Grid Container>
              <div className="color-picker">
                <CirclePicker
                  id="circle-picker"
                  display="flex"
                  circleSize={35}
                  colors={textLayerColors}
                  onChange={(color) => {
                    setColor(color.rgb);
                    console.log(color);
                  }}
                />
              </div>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
      <Grid item xs={6}>
        <Tshirt color={color} />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};
export default Customize;
