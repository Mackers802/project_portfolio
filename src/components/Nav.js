import React from 'react';
import $ from 'jquery';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCss3, faGit, faGithub, faHtml5, faJs, faLinkedin, faMdb, faNode, faReact } from "@fortawesome/free-brands-svg-icons"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function nav() {
  const toggle_submenu = (e) => {
    const $this = $(e.target);
    const $menu = $this.parent('.menu');
    var $submenu = $menu.children('.submenu');
    if($this.hasClass('submenu-link'))
      $submenu = $this.parent('.submenu');

    if($submenu.length > 0 && $submenu.hasClass('hide'))
        $submenu.removeClass('hide');
    else
      $submenu.addClass('hide');
  }
  
  return (
    <div id="navbar">
      <span className="previous-parent"> <Link to="/"> <FontAwesomeIcon className='previous' icon={faArrowRightToBracket} /> </Link> </span>
      <span className="dropdowns-parent">
        <Link className="link" to="/"> Contact </Link>
        <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
          <Link className="title" to="/projects" > Projects </Link>
          <ul className="submenu hide" >
            <li className="submenu-link" > <span className="" >My Project 1 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 2 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 3 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 4 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 5 </span> </li>
          </ul>
        </div>
        <Link className="link" to="/"> AWS Cert's </Link>
      </span>
    </div>
  )
}
