import Slider from '@material-ui/core/Slider'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));




class slide extends React.Component {
    
    render() {
        

        return (

            <Slider
                defaultValue={30}
                //getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
                
            />


        )
        


    }



}

export default slide;