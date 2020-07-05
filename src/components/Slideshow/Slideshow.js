import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slideshow.scss';



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
const Slideshow = ({ work }) => {
    const [infoIsVisible, setInfoIsVisible] = useState(true);
    return (
    <Grid container className={`slideshow ${infoIsVisible && "info-is-visible"}`}>
      <Grid item xs={12}>
        <Slider {...sliderProps}>
          {work.map((w) => 
            <Grid container className="slide-item">
              <Grid item container xs={12} className="image-block" justify="center" alignItems="center">
                {infoIsVisible
                ?
                <div className="block-item info-item">
                  <Grid container className="info-container" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={6}>
                      <ul>
                        <li>{w.projectName}, {w.year}</li>
                        <li>{w.client}</li>
                      </ul>
                      <p>{w.deliverable}</p>
                      <p>{w.info}</p>
                      <p>Collaboration</p>
                      <ul>
                        {w.credits.map((c) =>
                        <li>{c}</li>
                        )}
                      </ul>
                    </Grid>
                  </Grid>
                </div>
                :
                <div className="block-item image-item" style={{backgroundImage: `url(${w.image})`}}/>
                }
              </Grid>
              <Grid container className="slide-item-caption" justify="space-between">
                <Grid item container xs={1} justify="flex-start">{w.id}/{work.length}</Grid>
                <Grid item container className="project-desc" xs={10} justify="center">{w.projectName}, {w.client}. {w.caption}</Grid>
                {/* <Grid item container xs={1} justify="flex-end">{w.year}</Grid> */}
                <Grid item container xs={1} justify="flex-end">
                    <div className="info-toggler" onClick={() => setInfoIsVisible(!infoIsVisible)}>{infoIsVisible ? "Images" : "Info"}</div>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Slider>
      </Grid>
    </Grid>
    )
}

export default Slideshow
