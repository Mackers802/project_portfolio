import React from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faBookmark, faSignal, faWifi, faBatteryFull} from "@fortawesome/free-solid-svg-icons";

export default function Phone(props) {
    function rotate_horizontal(){
        rotate_phone('horizontal', $('.orientation.horizontal')); 
        $('.orientation.vertical').hide();
    }
    function rotate_vertical(){
        rotate_phone('', $('.orientation.vertical')); 
        $('.orientation.horizontal').hide();
    }

    function rotate_phone(direction, $orientation){
        const $phone = $('.iphone');
        $orientation.show();

        if(direction === 'horizontal')
            $phone.addClass('horizontal');
        else
            $phone.addClass('vertical').removeClass('horizontal');
    }

  return (
   <>
        <div className="orientation vertical" onClick={rotate_horizontal}><FontAwesomeIcon icon={faMobile} /></div>
        <div className="orientation horizontal" onClick={rotate_vertical}><FontAwesomeIcon icon={faMobile} /></div>
        <div className="iphone">
            <div className="top">
                <span className="clock">
                    <span className="time">1:30</span>
                    <span className="bookmark"><FontAwesomeIcon icon={faBookmark} /></span>
                </span>
                <span className="information"> 
                    <span className="bars"> <FontAwesomeIcon icon={faSignal} /> </span> 
                    <span className="wifi"> <FontAwesomeIcon icon={faWifi} /></span> 
                    <span className="battery"><FontAwesomeIcon icon={faBatteryFull} /></span>
                </span>
            </div>
            <div className="content">
                {props.props.content}
            </div>
            <div className="bottom">
                <span className="swipe"></span>
            </div>
        </div>
   </>
  )
}
