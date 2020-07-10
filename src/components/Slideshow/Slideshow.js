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
      <>
        <div className="info-toggler" onClick={() => setInfoIsVisible(!infoIsVisible)}>
          {infoIsVisible ? "Images" : "Info"}
        </div>
          <Grid container className={`slideshow ${infoIsVisible && "info-is-visible"}`}>
            <Grid item xs={12}>
              <Slider {...sliderProps}>
                  {work.map((w) => 
                  <Grid container className="slide-wrapper">
                    <CSSTransition
                      in={infoIsVisible}
                      timeout={{enter: 1000, exit: 500}}
                      classNames="my-node"
                      unmountOnExit
                      onEnter={() => setInfoIsVisible(true)}
                      onExited={() => setInfoIsVisible(false)}
                    >
                      <section className="slide-section section-info">
                      <Grid item  xs={12} sm={8}>
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
                      </section>
                    </CSSTransition>


                    <CSSTransition
                      in={!infoIsVisible}
                      timeout={{enter: 1000, exit: 500}}
                      classNames="my-node"
                      unmountOnExit
                      onEnter={() => setInfoIsVisible(false)}
                      onExited={() => setInfoIsVisible(true)}
                    >
                    <section className="slide-section section-image">
                      <Grid item container xs={12} className="image-block" justify="center" alignItems="center">
                        <div className="block-item image-item" style={{backgroundImage: `url(${w.image})`}}/>
                      </Grid>
                    </section>
                  </CSSTransition>
                  <CSSTransition
                      in={!infoIsVisible}
                      timeout={{enter: 1000, exit: 500}}
                      classNames="my-node"
                      unmountOnExit
                      onEnter={() => setInfoIsVisible(false)}
                      onExited={() => setInfoIsVisible(true)}
                    >
                      <section className="slide-section section-caption">
                        <Grid container className="caption-wrapper" alignItems="flex-end">
                          <Grid item container className="caption-item caption-count" xs={12} sm={1} justify="flex-start">
                            <span>{w.id}/{work.length}</span>
                          </Grid>
                          <Grid item container className="caption-item caption-description" xs={10} sm={10} justify="center">
                            <span>{w.caption}</span>
                          </Grid>
                          <Grid item container className="caption-item caption-spacer" xs={4} sm={1} justify="flex-end"/>
                        </Grid>
                      </section>
                    </CSSTransition>
                  </Grid>
            )}
        </Slider>
      </Grid>
    </Grid>
    </>
    )
}

export default Slideshow
