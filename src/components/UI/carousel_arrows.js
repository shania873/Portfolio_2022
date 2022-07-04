import React from 'react';
import { ActionKind, usePony } from "pony-props";
import logoCSS from '../../assets/img/icon_css.png';
import logoJavascript from '../../assets/img/icon_javascript.png';
import logoSASS from '../../assets/img/icon_sass.png';






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
      getAnnouncerProps
    } = usePony({ numItems: items.length });

 
  console.log(getCarouselProps())
    return (
      <div {...getSectionProps()}>
        <h1 {...getHeadingProps()}>Skills</h1>
        <div {...getCarouselWrapperProps()}>
          <ul {...getCarouselProps()}>
            {props.aboutItems.map((item, idx) => (
              <li key={idx} {...getCarouselItemProps(idx)}>
                <img src={item.image} alt={item.alt} style={{width: "190px"}}/>
              </li>
            ))}
          </ul>
        </div>
         <button {...getButtonProps(ActionKind.Previous)}>Previous</button>
        <button {...getButtonProps(ActionKind.Next)}>Next</button>
        <div {...getAnnouncerProps()}>
          <p>{`${items.length}`}</p>
        </div>
      </div>
    );
  };