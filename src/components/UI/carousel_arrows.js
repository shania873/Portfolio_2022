import React from 'react';
import { ActionKind, usePony } from "pony-props";
import logoCSS from '../../assets/img/icon_css.png';
import logoJavascript from '../../assets/img/icon_javascript.png';
import logoSASS from '../../assets/img/icon_sass.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowLeft,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';




export default function Carousel(props) {
    let items = 
    [{
        "id": 0 ,
        "image": logoCSS,
        "alt": logoCSS
    },
    {
        "id": 1 ,
        "image": logoJavascript,
        "alt": logoJavascript
    },
    {
        "id": 2 ,
        "image": logoSASS,
        "alt": logoSASS
    }]   

    const {
      getSectionProps,
      getHeadingProps,
      getCarouselWrapperProps,
      getCarouselProps,
      getCarouselItemProps,
      getButtonProps,
      getAnnouncerProps,
      state
    } = usePony({ numItems: items.length });

    // console.log(getCarouselItemProps());


    setInterval(() => {
        // console.log(getCarouselProps);
// console.log(state.activeSlideIndex + 1 < items.length)
        if (state.activeSlideIndex + 1 < items.length){
            document.getElementById("arrow-right").click();
        }
        // document.getElementById("arrow-left").click();

      }, "3000")

 
//   console.log(getCarouselProps())
    return (
      <div {...getSectionProps()}>
        <h1 {...getHeadingProps()}>Skills</h1>
        <div {...getCarouselWrapperProps()}>
          <ul {...getCarouselProps()}>
            {props.aboutItems.map((item, idx) => (
              <li key={idx} {...getCarouselItemProps(idx)}>
                <img src={item.image} alt={item.alt} style={{width: "190px"}}/> {props.aboutItems.id}
              </li>
            ))}
          </ul>
        </div>
         <button {...getButtonProps(ActionKind.Previous)} id="arrow-left"><FontAwesomeIcon icon={faArrowLeft} color="#0dca7b" /></button>
        <button {...getButtonProps(ActionKind.Next)} id="arrow-right"><FontAwesomeIcon icon={faArrowRight} color="#0dca7b" /></button>
        <div {...getAnnouncerProps()}>
        <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
        </div>
      </div>
    );
  };