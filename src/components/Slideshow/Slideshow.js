import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slideshow.scss';
import { CSSTransition } from 'react-transition-group';


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
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}
const Slideshow = ({ work }) => {
    const [infoIsVisible, setInfoIsVisible] = useState(false);
    return (
    <Grid container className={`slideshow ${infoIsVisible && "info-is-visible"}`}>
      <Grid item xs={12}>
        <Slider {...sliderProps}>
          {work.map((w) => 
            <Grid container className="slide-item">
              <Grid item container xs={12} className="image-block" justify="center" alignItems="center">
                <CSSTransition
                  in={infoIsVisible}
                  timeout={{enter: 1000, exit: 500}}
                  classNames="my-node"
                  unmountOnExit
                  onEnter={() => setInfoIsVisible(true)}
                  onExited={() => setInfoIsVisible(false)}
                >
                  <div className="block-item info-item">
                    <Grid container className="info-container" justify="flex-start" alignItems="flex-start">
                      <Grid item xs={12} sm={8}>
                        <ul>
                          <li>{w.projectName}, {w.year}</li>
                          <li>{w.client}</li>
                        </ul>
                        <p>{w.deliverable}</p>
                        <p>{w.info}</p>
                        <p>Featuring work by</p>
                        <ul className="credits">
                          {w.credits.map((c) =>
                          <li>{c}</li>
                          )}
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={!infoIsVisible}
                  timeout={{enter: 1000, exit: 500}}
                  classNames="my-node"
                  unmountOnExit
                  onEnter={() => setInfoIsVisible(false)}
                  onExited={() => setInfoIsVisible(true)}
                >
                  <div className="block-item image-item" style={{backgroundImage: `url(${w.image})`}}/>
                </CSSTransition>
              </Grid>
              <Grid container className="slide-item-caption" justify="space-between" alignItems="flex-end">
                <Grid item container xs={2} sm={1} justify="flex-start">
                  <CSSTransition
                    in={!infoIsVisible}
                    timeout={{enter: 1000, exit: 500}}
                    classNames="my-node"
                    unmountOnExit
                    onEnter={() => setInfoIsVisible(false)}
                    onExited={() => setInfoIsVisible(true)}
                  >
                    <span>{w.id}/{work.length}</span>
                  </CSSTransition>
                </Grid>
                <Grid item container className="project-desc" xs={8} sm={10} justify="center">
                  <CSSTransition
                      in={!infoIsVisible}
                      timeout={{enter: 1000, exit: 500}}
                      classNames="my-node"
                      unmountOnExit
                      onEnter={() => setInfoIsVisible(false)}
                      onExited={() => setInfoIsVisible(true)}
                    >
                      <span>{w.caption}</span>
                  </CSSTransition>
                </Grid>
                <Grid item container xs={2} sm={1} justify="flex-end">
                    <div className="info-toggler" onClick={() => setInfoIsVisible(!infoIsVisible)}>
                      {infoIsVisible ? "Images" : "Info"}
                    </div>
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
