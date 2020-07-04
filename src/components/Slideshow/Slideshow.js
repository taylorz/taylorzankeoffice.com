import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Fade } from 'react-slideshow-image';
import './Slideshow.scss';

import TestImage from '../../assets/images/test.jpg'
import TestImage2 from '../../assets/images/test1.png'
 
const fadeImages = [
  {
    id:"1",
    image: TestImage,
    caption: "Pamphlet printed for Studio X Shenzhen "
  },
  {
    id:"2",
    image: TestImage2,
    caption: "this one was too"
  }
];
 
const fadeProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  autoplay: false,
  arrows: false,
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  // }
}
 
const Slideshow = ({ noMatte }) => (
    <Grid container className="slideshow">
      <Grid item xs={12}>
        <Fade {...fadeProperties}>
          {fadeImages.map((i) => 
            <Grid container className="slide-item">
              <Grid item container xs={12} className="image-block" justify="center" alignItems="center">
                <div className={`image-item ${noMatte && "no-matte"}`} style={{backgroundImage: `url(${i.image})`}}/>
              </Grid>
              <Grid container className="slide-item-caption" justify="space-between">
                <Grid item>{i.id}/{fadeImages.length}</Grid>
                <Grid item>{i.caption}</Grid>
                <Grid item>2020</Grid>
              </Grid>
            </Grid>
          )}
        </Fade>
      </Grid>
    </Grid>
)

export default Slideshow
