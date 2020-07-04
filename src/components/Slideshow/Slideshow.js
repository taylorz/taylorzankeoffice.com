import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slideshow.scss';
import TestImage from '../../assets/images/test.png'
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

const NextArrow = ({ onClick }) => (
  <div 
    onClick={onClick}
    className="next-arrow"
    
  />
)
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="prev-arrow"
  />
)
 
const sliderProps = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

const Slideshow = ({ noMatte }) => (
    <Grid container className="slideshow">
      <Grid item xs={12}>
        <Slider {...sliderProps}>
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
        </Slider>
      </Grid>
    </Grid>
)

export default Slideshow
