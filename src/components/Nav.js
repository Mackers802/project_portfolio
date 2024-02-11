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

      <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
          <span className="title"> Skills </span>
          <ul className="submenu submenu-horizontal hide" >
            <li className="submenu-link" > <span className="" > React </span> </li>
            <li className="submenu-link" > <span className="" > Python </span> </li>
            <li className="submenu-link" > <span className="" > PHP </span> </li>
            <li className="submenu-link" > <span className="" > Javascript </span> </li>
            <li className="submenu-link" > <span className="" > Bootstrap </span> </li>
            <li className="submenu-link" > <span className="" > HTML </span> </li>
            <li className="submenu-link" > <span className="" > Scss/Css </span> </li>
            <li className="submenu-link" > <span className="" > Smarty </span> </li>
          </ul>
        </div>

        <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
          <Link className="title" to="/projects" > Projects </Link>
          <ul className="submenu hide" >
            <li className="submenu-link" > <span className="" > My Project 1 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 2 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 3 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 4 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 5 </span> </li>
          </ul>
        </div>

        <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
          <Link className="link" to="/"> AWS Cert's </Link>
          <ul className="submenu hide" >
              <li className="submenu-link" > <span className="" > Cernt Name 1 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 2 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 3 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 4 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 5 </span> </li>
            </ul>
        </div>

        <Link className="link link-last" to="/"> Contact </Link>

      </span>
    </div>
  )
}
